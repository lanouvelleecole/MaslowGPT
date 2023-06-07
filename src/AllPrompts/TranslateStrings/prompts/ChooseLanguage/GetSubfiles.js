import { answers } from "../../../../../index.js";
import path from "path";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { Constants } from "../../../../AppConstants/Constants.js";
import { readFilesRecursively } from "../../../../services/GetAllFilesFromPath/getAllFilesFromPath.js";

export function GetSubfiles(appRootPath) {
  const affine_file_where_we_use = answers.AffineChooseLanguage;
  const search_path = path.join(appRootPath, affine_file_where_we_use);

  const all_src_files_from_path = readFilesRecursively(
    search_path,
    Constants.exts,
    Constants.ignoreList
  )
    ?.map((filePath) => {
      return path.join(affine_file_where_we_use, filePath);
    })
    ?.filter((path) => {
      return !path.endsWith(".hbs");
    });

  return all_src_files_from_path?.map((some_path) => {
    return getPathWithForwardSlashes(some_path);
  });
}
