import path from "path";
import fs from "fs";

// avec ces paths (filePaths),
// crée des fichier .hbs
// pour chaque fichier existant.
// avec noms appropriés (wordsInHBSFileName)
// supprime si déja existant.
const createHBSFiles = ({ filePaths, wordsInHBSFileName, wordsInFile }) => {
  const filePathsFiltered = filePaths.filter((filePathInfo) => {
    // path du fichier a partir de C://
    const fullFilePath = filePathInfo.fullFilePath;
    const parsedFilePath = path.parse(fullFilePath);
    const extension = parsedFilePath.ext;

    // si c'est pas un fichier hbs, on le garde dans la liste
    if (extension != ".hbs") {
      return true;
    }
    // si c'est un fichier .hbs. on l'enlève de la liste,
    // et on supprime l'item .hbs
    else {
      //console.log(`path of file to be deleted: ${fullFilePath}`);

      // supprime fichier hbs si déja existant
      deleteFileIfExisting(fullFilePath);

      return false;
    }
  });

  // pour chaque fichier de la liste de fichier .js
  // situés dans le dossier....
  return filePathsFiltered.map((filePathInfo) => {
    // path du fichier .js a partir de C://
    const fullFilePath = filePathInfo.fullFilePath;

    // version user friendly de ce path ci dessus
    const parsedFullFilePath = path.parse(fullFilePath);

    // nom du fichier .js
    const fileName = parsedFullFilePath.name;

    // extension du fichier .js (un peu zarbi, mais a l'avenir on peut facilement modifier ce script pour d'autres languages)
    const fileExtension = parsedFullFilePath.ext;

    // dossier du fichier .js
    const filePrefix = parsedFullFilePath.dir;

    // le nom de fichier .js (avec correction appliquée)
    const fileNameFixed = fileName.replace(
      new RegExp(wordsInHBSFileName.word, "g"),
      wordsInHBSFileName.replaceWordWith
    );

    // le path du fichier .hbs correspondant
    const hbsFilePath = path.join(
      filePrefix,
      fileNameFixed + fileExtension + ".hbs"
    );

    // le path du fichier js à créer via PLOP
    const filePathFromAppRoot = filePathInfo.filePathFromRoot.replace(
      new RegExp(wordsInFile[0].word, "g"),
      wordsInFile[0].replaceWordWith
    );

    // le path du fichier hbs à créer via PLOP.
    // partant du root du dossier template.
    const parsedFilePathFromRoot = path.parse(filePathInfo.filePathFromRoot);
    const hbsFilePathFromAppRoot = path.join(
      parsedFilePathFromRoot.dir,
      parsedFilePathFromRoot.name.replace(
        new RegExp(wordsInHBSFileName.word, "g"),
        wordsInHBSFileName.replaceWordWith
      ) +
        fileExtension +
        ".hbs"
    );

    // crée un template copié collé du fichier original,
    // mais avec extension .hbs
    // (Handlebars.js, PLOP)
    fs.copyFileSync(fullFilePath, hbsFilePath);

    // dans ce nouveau fichier template hbs,
    // remplace les mots souhaités
    wordsInFile.forEach((wordInFile) => {
      replaceWordInFile({
        fileName: hbsFilePath,
        word: wordInFile.word,
        replaceWordWith: wordInFile.replaceWordWith,
      });
    });

    // escape les {{ en \{{
    replaceWordInFile({
      fileName: hbsFilePath,
      word: "{{",
      replaceWordWith: "\\{{",
    });

    /*
    console.log(`**********`);
    console.log(`fichier template: ${hbsFilePath} crée avec succès.`);
    console.log(
      `path du fichier .js, dans root du dossier template: ${filePathFromAppRoot}`
    );
    console.log(
      `path du fichier .hbs, dans root du dossier template: ${hbsFilePathFromAppRoot}`
    );
    console.log(`**********\n\n`);*/

    return {
      hbsFilePath: hbsFilePath,
      hbsFilePathFromAppRoot: hbsFilePathFromAppRoot,
      filePathFromAppRoot: filePathFromAppRoot,
    };
  });
};

function deleteFileIfExisting(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);

    //console.log(`Suppression de ${filePath} effectuée avec succès !!`);
  }
}

function replaceWordInFile({ fileName, word, replaceWordWith }) {
  // read content of file
  const contents = fs.readFileSync(fileName, "utf-8");

  //console.log(`Ok let's replace all ${word} with ${replaceWordWith}`);

  const contentsFixed = contents.replace(
    new RegExp(word, "g"),
    replaceWordWith
  );

  // Write edited content back to file
  fs.writeFileSync(fileName, contentsFixed);

  return {
    fileName: fileName,
    contentsFixed: contentsFixed,
  };
}

/**
 *
 * @param {*} fileName
 * @param {*} textContent
 *
 * @returns ajoute textContent au tout début du fichier fileName.
 * saute deux lignes pour aérer.
 *
function addTextAtBeginningOfFile({ fileName, textContent }) {
  // read content of file
  const contents = fs.readFileSync(fileName, "utf-8");

  // ze content avec le text en + au début
  const contentsFixed = `\n${textContent}\n\n${contents}`;

  // Write edited content back to file
  fs.writeFileSync(fileName, contentsFixed);

  return {
    fileName: fileName,
    contentsFixed: contentsFixed,
  };
}
*/
export { createHBSFiles };
