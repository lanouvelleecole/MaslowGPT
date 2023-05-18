import { createHBSFiles } from "./createHBSFiles.js";
import { createPLOPAdds } from "./createPLOPAdds.js";
import { getAllFilesFromFolder } from "./getAllFilesFromFolder.js";

/**
 *
 * @param {*} un object contenant:
 *
 * templateFolderPath: le path du dossier
 * contenant les fichier à transformer
 * en templates.
 *
 * templateFolderPathFromAppRoot: le path du dossier
 * contenant les fichiers a transformer en templates,
 * mais à partir du root du dossier de l'application react native.
 *
 * wordsInFile: les noms a remplacer
 * dans les fichiers
 *
 * wordsInHBSFileName: les noms à remplacer
 * dans les noms de fichiers.
 *
 * @returns une liste d'ajouts de fichiers
 * templates crées à partir des fichiers,
 * dossiers, et sous dossiers, situés dans templateFolderPath.
 */
const createTemplateFromFolder = ({
  templateFolderPath,
  templateFolderPathFromAppRoot,
  creationFolderFromAppRoot,
  wordsInFile,
  wordsInFilePath,
  wordsInHBSFileName,
}) => {
  // 1) Il nous faut la liste de
  // tous les trucs dans le dossier
  const allFiles = getAllFilesFromFolder({
    parentFolderPath: templateFolderPath,
    childFolderPath: "",
  });

  // 2) avec ces paths,
  // crée des fichier .hbs
  // pour chaque fichier existant.
  // avec noms appropriés (wordsInHBSFileName).
  // supprime si déja existant.
  // remplace aussi mots dans contenu fichier .hbs
  // (wordsInFile)
  const allHBSFiles = createHBSFiles({
    filePaths: allFiles,
    wordsInHBSFileName: wordsInHBSFileName,
    wordsInFile: wordsInFile,
    wordsInFilePath: wordsInFilePath,
  });

  // avec nos paths hbs (fullFilePath)
  // et paths from root (filePathFromRoot)
  // créons une liste de
  // add (PLOP) pour chaque fichier .hbs
  const allAdds = createPLOPAdds({
    hbsFiles: allHBSFiles,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
  });

  return allAdds;
};

export { createTemplateFromFolder };
