import fs from "fs";
import path from "path";
import { Constants } from "../../AppConstants/Constants.js";
import {
  FileEndsWith,
  FileIsBanned,
} from "../GetAllFilesFromPath/getAllFilesFromPath.js";

function getClosestJSFilesWithPattern(startPath, pattern, prefix, worm) {
  let result = [];

  const fileExtensions = Constants.exts;
  const ignoreList = Constants.ignoreList;

  function traverseFileSystem(currentPath) {
    let files = fs.readdirSync(currentPath);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let filePath = path.join(currentPath, file);
      let stat = fs.statSync(filePath);

      if (
        stat.isFile() &&
        FileEndsWith(filePath, fileExtensions) &&
        !FileIsBanned(filePath, ignoreList)
      ) {
        let fileContent = fs.readFileSync(filePath, "utf8");

        if (fileContent.includes(pattern)) {
          let relativePath = path.relative(startPath, filePath);

          if (prefix) {
            relativePath = path.join(prefix, relativePath);
          }

          if (worm) {
            relativePath = relativePath.replace(worm, "");
          }

          result.push(relativePath);
        }
      } else if (stat.isDirectory() && !FileIsBanned(filePath, ignoreList)) {
        traverseFileSystem(filePath);
      }
    }
  }

  traverseFileSystem(startPath);

  return result;
}

export { getClosestJSFilesWithPattern };
