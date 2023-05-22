/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import path from "path";
import { deleteFileIfExisting } from "../DeleteFileIfExisting/DeleteFileIfExisting.js";
import { deleteFolderIfExisting } from "../DeleteFolderIfExisting/DeleteFolderIfExisting.js";

const DeleteFileOrFolder = (filePath) => {
  try {
    if (!filePath || typeof filePath !== "string") {
      throw new TypeError("filePath is not a valid string");
    }
    const extName = path.extname(filePath);
    extName ? deleteFileIfExisting(filePath) : deleteFolderIfExisting(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

export default DeleteFileOrFolder;
