import { createSubpageInitAndCie } from "./createSubpageInitAndCie.js";
import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import path from "path";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

/**
 * Permet de créer un template de page avec données persistent (Sqlite et Redux)
 */
function createSubpage({
  subfolder,
  appRootPathFromC,
  actualJsFile,
  name,
  pageAndSubpageData,
}) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsSubpage`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const pageName = pageAndSubpageData["get_page_name"];
  const appbarTitleStringName = pageAndSubpageData["get_appbar_title_name"];

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}/${namePascal}`,
    wordsInFile: [
      {
        word: "Tutoriels",
        replaceWordWith: namePascal,
      },

      {
        word: `SqliteRedux${namePascal}`,
        replaceWordWith: `SqliteRedux${pageName}`,
      },

      {
        word: `${namePascal}State`,
        replaceWordWith: `${pageName}State`,
      },

      /*{
        word: `${namePascal}State =`,
        replaceWordWith: `${pageName}State =`,
      },

      {
        word: `${namePascal}State,`,
        replaceWordWith: `${pageName}State,`,
      },

      {
        word: `${namePascal}State.`,
        replaceWordWith: `${pageName}State.`,
      },

      {
        word: `${namePascal}State/`,
        replaceWordWith: `${pageName}State/`,
      },

      {
        word: `${namePascal}StateFirstRow`,
        replaceWordWith: `${pageName}StateFirstRow`,
      },

      {
        word: `${namePascal}StateGetterSetter`,
        replaceWordWith: `${pageName}StateGetterSetter`,
      },*/

      {
        word: `ZeAppbarTitleName`,
        replaceWordWith: `${appbarTitleStringName}`,
      },

      {
        word: `GoTo${namePascal}List`,
        replaceWordWith: `GoTo${pageName}List`,
      },

      {
        word: `${namePascal}GetterSetter`,
        replaceWordWith: `${pageName}GetterSetter`,
      },

      {
        word: `${namePascal}/`,
        replaceWordWith: `${pageName}/`,
      },
    ],

    wordsInHBSFileName: {
      word: "Tutoriels",
      replaceWordWith: "Items",
    },
  };

  // ["TestPage", "AppStrings", ["TEstPageTitle", "le testou", "ze testou"]]

  return createTemplateFromFolder(templateCreationParams).concat(
    createSubpageInitAndCie({ subfolder, pageAndSubpageData, actualJsFile })
  );
}

export { createSubpage };
