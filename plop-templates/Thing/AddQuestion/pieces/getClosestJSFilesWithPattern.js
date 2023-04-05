import fs from "fs";
import path from "path";

function getClosestJSFilesWithPattern(startPath, pattern, prefix, worm) {
  let result = [];

  function traverseFileSystem(currentPath) {
    let files = fs.readdirSync(currentPath);

    for (let i = 0; i < files.length; i++) {
      let filePath = path.join(currentPath, files[i]);
      let stat = fs.statSync(filePath);

      if (stat.isFile() && filePath.endsWith(".js")) {
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
      } else if (stat.isDirectory()) {
        traverseFileSystem(filePath);
      }
    }
  }

  traverseFileSystem(startPath);

  return result;
}

export { getClosestJSFilesWithPattern };
