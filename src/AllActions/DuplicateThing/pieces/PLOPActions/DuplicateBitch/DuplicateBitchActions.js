/* PLOP_IMPORT_DuplicateFileOrFolder */
import { DuplicateFileOrFolder } from "../../../../../services/DuplicateFileOrFolder/DuplicateFileOrFolder.js";
/* PLOP_IMPORT_DuplicateFileOrFolder */

import path from "path";

export const DuplicateBitchAppendAction = (promptData, appRootPath) => {
  const originPath = path.join(appRootPath, promptData["OriginalPath"]);
  const destPath = path.join(appRootPath, promptData["DuplicatePath"]);

  DuplicateFileOrFolder(originPath, destPath);
};

export const DuplicateBitchAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //DuplicateBitchFile: "plop-DuplicateBitchs/hbs-files/<filename>.js.hbs",
    DuplicateBitch: ``,
    skipIfExists: true,
  };
};
