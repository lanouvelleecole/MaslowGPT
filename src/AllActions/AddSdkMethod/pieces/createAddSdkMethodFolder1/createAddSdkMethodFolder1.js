import path from "path";
import { initAddSdkMethodAndCie } from "./initAddSdkMethodAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";

/**
 *
 *
 * Ici, crée ton dossier templateFolder, en détail.
 *
 * Remplace les trucs <comme ceci> par ce qu'il faut, selon description.
 */
function createAddSdkMethodFolder1(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["SDKMethodName"];
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateSDKMethod`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `src/services/${prompt_value}`;

  const templateFolderCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "EditChatGPTArt",
        replaceWordWith: `${prompt_value}`,
      },
    ],
    wordsInFile: [
      {
        word: "EditChatGPTArt",
        replaceWordWith: `${prompt_value}`,
      },
    ],

    wordsInHBSFileName: {
      word: "EditChatGPTArt",
      replaceWordWith: `${prompt_value}`,
    },
  };

  return createTemplateFromFolder(templateFolderCreationParams).concat(
    initAddSdkMethodAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddSdkMethodFolder1 };
