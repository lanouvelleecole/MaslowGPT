import { deleteFolderIfExisting } from "../../services/DeleteFolderIfExisting/DeleteFolderIfExisting.js";
import { deleteFileIfExisting } from "../../services/DeleteFileIfExisting/DeleteFileIfExisting.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
export function supprimeMaillonsFaibles(
  appPiecesFolderPath,
  appJSPath,
  appTsxPath,
  pagesFolderPath,
  reduxStateFolderPath
) {
  // un sandwich de texte

  console.log("**********");

  // si app.js existe, supprime le
  deleteFileIfExisting(appJSPath);
  deleteFileIfExisting(appTsxPath);
  deleteFolderIfExisting(pagesFolderPath);
  deleteFolderIfExisting(reduxStateFolderPath);
  deleteFolderIfExisting(appPiecesFolderPath);

  // un sandwich de texte

  console.log("**********");
}
