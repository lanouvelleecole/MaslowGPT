import fs from "fs";
import path from "path";

function getAllFoldersFromFolder(rootPath) {
  let folders = [];

  function traverseDir(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
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
