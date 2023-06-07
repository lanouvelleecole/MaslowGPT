import path from "path";
import { getNPMFolderRoot } from "../../../../../../getNPMFolderRoot.js";

/**
 *
 * args: appRootPath, answers
 *
 * return .....
 *
 * This function .......
 */
function GetAllLanguagesPath() {
  const allLanguagesPath = path.join(
    getNPMFolderRoot(),

    `src/AppStrings/AllLanguages/AllLanguages.json`
  );

  return allLanguagesPath;
}

function GetAllLanguagesCodesPath() {
  const allLanguagesPath = path.join(
    getNPMFolderRoot(),

    `src/AppStrings/AllLanguages/AllLanguagesCodes.json`
  );

  return allLanguagesPath;
}

export { GetAllLanguagesPath, GetAllLanguagesCodesPath };
