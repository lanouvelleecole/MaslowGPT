import path from "path";
import { initAddSdkMethodAndCie } from "./initAddSdkMethodAndCie.js";
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
function createAddSdkMethodFolder4(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const AddSdkMethodFolderPathFromAppRoot = `plop-AddSdkMethods/hbs-files/<AddSdkMethodFolderName>`;
  const AddSdkMethodFolderPath = path.join(
    getNPMFolderRoot(),
    AddSdkMethodFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const AddSdkMethodCreationParams = {
    AddSdkMethodFolderPath: AddSdkMethodFolderPath,
    AddSdkMethodFolderPathFromAppRoot: AddSdkMethodFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_AddSdkMethod_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the AddSdkMethod folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(AddSdkMethodCreationParams).concat(
    initAddSdkMethodAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddSdkMethodFolder4 };
