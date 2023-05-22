import { answers } from "../../../../../index.js";
import path from "path";
import { getAllFoldersFromFolder } from "../../../../services/GetAllFoldersFromFolder/getAllFoldersFromFolder.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
function GetSubfolders(appRootPath) {
  const approx_folder = answers.AffineOriginalPath;

  const search_path = path.join(appRootPath, approx_folder);

  let subfolders_inside_src = getAllFoldersFromFolder(search_path).map(
    (folderPath) => path.join(approx_folder, folderPath)
  );

  subfolders_inside_src = subfolders_inside_src.map((some_path) => {
    return getPathWithForwardSlashes(some_path);
  });

  return subfolders_inside_src;
}

export { GetSubfolders };
