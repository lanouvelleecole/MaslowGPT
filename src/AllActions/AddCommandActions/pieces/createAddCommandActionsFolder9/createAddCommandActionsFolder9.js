import path from "path";
import { initAddCommandActionsAndCie } from "./initAddCommandActionsAndCie.js";
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
function createAddCommandActionsFolder9(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const AddCommandActionsFolderPathFromAppRoot = `plop-AddCommandActionss/hbs-files/<AddCommandActionsFolderName>`;
  const AddCommandActionsFolderPath = path.join(
    getNPMFolderRoot(),
    AddCommandActionsFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const AddCommandActionsCreationParams = {
    AddCommandActionsFolderPath: AddCommandActionsFolderPath,
    AddCommandActionsFolderPathFromAppRoot: AddCommandActionsFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_AddCommandActions_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the AddCommandActions folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(AddCommandActionsCreationParams).concat(
    initAddCommandActionsAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddCommandActionsFolder9 };
