import fs from "fs";
import path from "path";

function DeleteFolderContents({ folderPath, whiteList }) {
  try {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      if (!whiteList.includes(file)) {
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          DeleteFolderContents({ folderPath: filePath, whiteList });
          fs.rmdirSync(filePath);
        } else {
          fs.unlinkSync(filePath);
        }
      }
    }

    return 1;
  } catch (error) {
    //console.error(error);
    return null;
  }
}

export { DeleteFolderContents };
