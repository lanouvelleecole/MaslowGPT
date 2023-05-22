import fs from "fs";
import path from "path";

function readFilesRecursively(pathname, fileExtensions, ignoredPaths) {
  const result = [];

  function traverseDir(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (
        stats.isFile() &&
        !FileIsBanned(filePath, ignoredPaths) &&
        (FileEndsWith(filePath, fileExtensions) || !fileExtensions)
      ) {
        result.push(path.relative(pathname, filePath));
      } else if (stats.isDirectory() && !FileIsBanned(filePath, ignoredPaths)) {
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

export function FileEndsWith(filePath, fileExtensions) {
  const filePathExt = path.extname(filePath);

  return fileExtensions?.includes(filePathExt);
}

export function FileIsBanned(filePath, ignoredPaths) {
  return ignoredPaths.some((ignoredPath) => filePath.includes(ignoredPath));
}

export { readFilesRecursively };
