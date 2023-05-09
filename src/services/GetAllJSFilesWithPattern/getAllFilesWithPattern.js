import fs from "fs";
import path from "path";

function getAllJSFilesWithPattern(inputPath, pattern) {
  if (!fs.existsSync(inputPath)) {
    return null;
  }

  const jsFiles = [];
  const files = fs.readdirSync(inputPath);

  for (const file of files) {
    const filePath = path.join(inputPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subFiles = getAllJSFilesWithPattern(filePath, pattern);
      !subFiles ?? jsFiles.push(...subFiles);
    } else if (path.extname(filePath) === ".js") {
      const fileContent = fs.readFileSync(filePath, "utf8");
      if (fileContent.includes(pattern)) {
        jsFiles.push(path.relative(process.cwd(), filePath));
      }
    }
  }

  return jsFiles.length > 0 ? jsFiles : null;
}

export { getAllJSFilesWithPattern };
