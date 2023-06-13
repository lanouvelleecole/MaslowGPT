import { answers } from "../../../../../index.js";
import path from "path";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { getAllFilesWithPattern } from "../../../getAllFoldersWithPattern/getAllFoldersWithPattern.js";

export function GetTaggedSubfiles(appRootPath) {
  const affine_file_where_we_use = answers.AffineChooseAIModel;
  const search_path = path.join(appRootPath, affine_file_where_we_use);

  // tu as aussi accès à getAllFoldersWithPattern
  const all_tagged_files = getAllFilesWithPattern(
    search_path,
    "<some pattern>"
  )?.filter((path) => {
    return !path.endsWith(".hbs");
  });

  return all_tagged_files?.map((some_path) => {
    return getPathWithForwardSlashes(some_path);
  });
}
