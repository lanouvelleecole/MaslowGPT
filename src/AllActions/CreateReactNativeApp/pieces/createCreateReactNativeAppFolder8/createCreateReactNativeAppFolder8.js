import path from "path";
import { initCreateReactNativeAppAndCie } from "./initCreateReactNativeAppAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function createCreateReactNativeAppFolder8(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const CreateReactNativeAppFolderPathFromAppRoot = `plop-CreateReactNativeApps/hbs-files/<CreateReactNativeAppFolderName>`;
  const CreateReactNativeAppFolderPath = path.join(
    getNPMFolderRoot(),
    CreateReactNativeAppFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const CreateReactNativeAppCreationParams = {
    CreateReactNativeAppFolderPath: CreateReactNativeAppFolderPath,
    CreateReactNativeAppFolderPathFromAppRoot: CreateReactNativeAppFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_CreateReactNativeApp_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the CreateReactNativeApp folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(CreateReactNativeAppCreationParams).concat(
    initCreateReactNativeAppAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createCreateReactNativeAppFolder8 };
