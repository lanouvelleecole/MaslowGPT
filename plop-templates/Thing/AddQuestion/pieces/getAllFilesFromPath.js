import fs from "fs";
import path from "path";

function getAllFilesFromPath(pathname) {
  let result = [];

  function traverseDir(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        result.push(path.relative(pathname, filePath));
      } else if (stats.isDirectory()) {
        traverseDir(filePath);
      }
    });
  }

  try {
    traverseDir(pathname);
  } catch (error) {
    return [];
  }

  return result.length ? result : [];
}

export { getAllFilesFromPath };
