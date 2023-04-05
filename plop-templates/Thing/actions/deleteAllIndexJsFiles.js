import path from "path";
import { deleteFileIfExisting } from "../initAddDefaultTemplate.js";
import { getAllFilesFromFolder } from "./getAllFilesFromFolder.js";

function deleteAllIndexJsFiles(appRootPathFromC, subfolder) {
  const fullSubfolderPath = path.join(appRootPathFromC, subfolder);

  // 1) Il nous faut la liste de
  // tous les trucs dans le dossier
  const allFiles = getAllFilesFromFolder({
    parentFolderPath: fullSubfolderPath,
    childFolderPath: "",
  });

  /*console.log(
    `partons à la chasse aux index.js, dans le panier: ${JSON.stringify(
      allFiles
    )}`
  );*/
  allFiles.forEach((fileData) => {
    const fullFilePath = fileData.fullFilePath;
    const fileNameAndExtension = path.basename(fullFilePath);

    //console.log(`file name: ${fileNameAndExtension}`);
    // si le fichier s'appelle index.js ou index.js.hbs, on supprime
    if (
      fileNameAndExtension == "index.js" ||
      fileNameAndExtension == "index.js.hbs"
    ) {
      console.log(`maillon faible: ${fullFilePath}`);
      deleteFileIfExisting(fullFilePath);
    }
  });

  return [];
}
export { deleteAllIndexJsFiles };
