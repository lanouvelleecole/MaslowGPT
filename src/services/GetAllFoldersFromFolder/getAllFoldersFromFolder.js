import fs from "fs";
import path from "path";
import { Constants } from "../../AppConstants/Constants.js";
import { FileIsBanned } from "../GetAllFilesFromPath/getAllFilesFromPath.js";

function getAllFoldersFromFolder(rootPath) {
  let folders = [];
  const ignoreList = Constants.ignoreList;

  function traverseDir(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory() && !FileIsBanned(filePath, ignoreList)) {
        folders.push(path.relative(rootPath, filePath));
        traverseDir(filePath);
      }
    });
  }

  try {
    traverseDir(rootPath);
    return folders;
  } catch (error) {
    //console.error(error);
    return [];
  }
}

export { getAllFoldersFromFolder };
