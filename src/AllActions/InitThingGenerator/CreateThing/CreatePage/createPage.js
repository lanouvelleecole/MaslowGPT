import { createPageInitAndCie } from "./createPageInitAndCie.js";
import { toPascalCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import path from "path";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";

/**
 * Permet de créer un template de page avec données persistent (Sqlite et Redux)
 */
function createPage({
  subfolder,
  appRootPathFromC,
  actualJsFile,
  name,
  pageAndSubpageData,
}) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsPage`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}/${namePascal}`,
    wordsInFilePath: [
      {
        word: "Tutoriels",
        replaceWordWith: namePascal,
      },
    ],
    wordsInFile: [
      {
        word: "Tutoriels",
        replaceWordWith: namePascal,
      },

      // remplace titre appbar
      {
        word: `ZeMuthafuckinAppbarTitle`,
        replaceWordWith: `${pageAndSubpageData["get_appbar_title_name"]}`,
      },

      // remplace msg vide
      {
        word: `ZeMuthafuckinEmptyMsg`,
        replaceWordWith: `${pageAndSubpageData["empty_db_msg_name"]}`,
      },

      // remplace msg btn vide
      {
        word: `ZeMuthafuckinEmptyBtnMsg`,
        replaceWordWith: `${pageAndSubpageData["empty_db_btn_msg_name"]}`,
      },
    ],

    wordsInHBSFileName: {
      word: "Tutoriels",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    createPageInitAndCie({ subfolder, pageAndSubpageData })
  );
}

export { createPage };
