import fs from "fs";
import path from "path";
import { Constants } from "../../AppConstants/Constants.js";
import {
  FileEndsWith,
  FileIsBanned,
} from "../../services/GetAllFilesFromPath/getAllFilesFromPath.js";

function getAllFoldersWithPattern(startPath, pattern) {
  const result = [];

  const fileExtensions = Constants.exts;
  const ignoreList = Constants.ignoreList;

  function traverseFileSystem(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !FileIsBanned(filePath, ignoreList)) {
        traverseFileSystem(filePath);
      } else if (
        stat.isFile() &&
        FileEndsWith(filePath, fileExtensions) &&
        !FileIsBanned(filePath, ignoreList)
      ) {
        const fileContent = fs.readFileSync(filePath, "utf8");

        if (fileContent.includes(pattern)) {
          const relativePath = path.relative(startPath, currentPath);
          result.push(relativePath);
        }
      }
    });
  }

  traverseFileSystem(startPath);

  return result.length ? result : null;
}

function getAllFilesWithPattern(startPath, pattern) {
  const result = [];

  const fileExtensions = Constants.exts;
  const ignoreList = Constants.ignoreList;

  function traverseFileSystem(currentPath) {
    const files = fs.readdirSync(currentPath);

    files.forEach((file) => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory() && !FileIsBanned(filePath, ignoreList)) {
        traverseFileSystem(filePath);
      } else if (
        stat.isFile() &&
        FileEndsWith(filePath, fileExtensions) &&
        !FileIsBanned(filePath, ignoreList)
      ) {
        const fileContent = fs.readFileSync(filePath, "utf8");

        if (fileContent.includes(pattern)) {
          const relativePath = path.relative(process.cwd(), filePath);
          result.push(relativePath);
        }
      }
    });
  }

  traverseFileSystem(startPath);

  return result.length ? result : null;
}

export { getAllFoldersWithPattern, getAllFilesWithPattern };
