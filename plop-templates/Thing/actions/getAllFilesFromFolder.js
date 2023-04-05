import path from "path";
import fs from "fs";

/**
 *
 *
 * @returns une liste d'objects contenant
 *
 * fullFilePath: le path partant de C://
 *
 * filePathFromRoot: le path partant du dossier racine alpha
 * (le tout premier parentFolderPath)
 */
const getAllFilesFromFolder = function ({ parentFolderPath, childFolderPath }) {
  // la liste de paths
  var results = [];

  // pour chaque chose dans le dossier folderPath...
  fs.readdirSync(parentFolderPath).forEach(function (thingName) {
    // le path du folder/fichier
    // à partir de C://
    const fullFileOrFolderPath = parentFolderPath + "/" + thingName;

    // le path du fichier/dossier,
    // partant depuis le root alpha
    const pathFromRoot = path.join(childFolderPath, thingName);

    //console.log(`full path: ${fullFileOrFolderPath}`);
    //console.log(`path from root of folder: ${pathFromRoot}`);
    // le fichier/folder
    // en tant qu'objet fs.Stats
    var stat = fs.statSync(fullFileOrFolderPath);

    // si c'est un dossier,
    // retourne son contenu en tant que liste de {}
    if (stat && stat.isDirectory()) {
      results = results.concat(
        getAllFilesFromFolder({
          parentFolderPath: fullFileOrFolderPath,
          childFolderPath: pathFromRoot,
        })
      );
    }

    // si c'est un fichier, retourne
    // un object contenant le path du fichier
    else
      results.push({
        // path long
        fullFilePath: fullFileOrFolderPath,

        // path relatif au root du dossier parent
        filePathFromRoot: pathFromRoot,
      });
  });

  return results;
};
export { getAllFilesFromFolder };
