import fs from "fs";
import path from "path";

function getAllQuestionnaireFolders(rootPath, pattern) {
  const result = [];

  function traverse(dir) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverse(filePath);
      } else if (stat.isFile() && path.extname(filePath) === ".js") {
        const fileContent = fs.readFileSync(filePath, "utf8");

        if (fileContent.includes(pattern)) {
          const relativePath = path.relative(rootPath, dir);
          result.push(relativePath);
        }
      }
    });
  }

  traverse(rootPath);

  return result.length ? result : null;
}

export { getAllQuestionnaireFolders };
