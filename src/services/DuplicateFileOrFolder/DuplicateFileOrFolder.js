/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import fs from "fs";
import path from "path";

const DuplicateFileOrFolder = (originPath, destPath) => {
  if (!fs.existsSync(originPath)) {
    throw new Error("Origin path does not exist!");
  }

  if (fs.existsSync(destPath)) {
    throw new Error(`Destination path '${destPath}' already exists`);
  }

  if (fs.lstatSync(originPath).isFile()) {
    // copy the file
    fs.copyFileSync(originPath, destPath);
  } else if (fs.lstatSync(originPath).isDirectory()) {
    // clone the content
    fs.mkdirSync(destPath);
    fs.readdirSync(originPath).forEach((file) => {
      // copy the content of the folders
      DuplicateFileOrFolder(
        path.join(originPath, file),
        path.join(destPath, file)
      );
    });
  } else {
    // other cases
    throw new Error(`Cannot process path '${originPath}'`);
  }
};

export { DuplicateFileOrFolder };
