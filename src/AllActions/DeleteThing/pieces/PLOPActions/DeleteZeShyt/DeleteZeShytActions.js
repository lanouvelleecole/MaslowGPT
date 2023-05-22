/* PLOP_IMPORT_DeleteFileOrFolder */
import DeleteFileOrFolder from "../../../../../services/DeleteFileOrFolder/DeleteFileOrFolder.js";
/* PLOP_IMPORT_DeleteFileOrFolder */
import path from "path";

export const DeleteZeShytAction = (promptData, appRootPath) => {
  const filePath = path.join(appRootPath, promptData["DeletePath"]);

  DeleteFileOrFolder(filePath);
};
