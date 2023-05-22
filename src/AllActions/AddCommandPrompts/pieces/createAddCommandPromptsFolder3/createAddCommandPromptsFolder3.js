import path from "path";
import { initAddCommandPromptsAndCie } from "./initAddCommandPromptsAndCie.js";
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
function createAddCommandPromptsFolder3(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const AddCommandPromptsFolderPathFromAppRoot = `plop-AddCommandPromptss/hbs-files/<AddCommandPromptsFolderName>`;
  const AddCommandPromptsFolderPath = path.join(
    getNPMFolderRoot(),
    AddCommandPromptsFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const AddCommandPromptsCreationParams = {
    AddCommandPromptsFolderPath: AddCommandPromptsFolderPath,
    AddCommandPromptsFolderPathFromAppRoot: AddCommandPromptsFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_AddCommandPrompts_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the AddCommandPrompts folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(AddCommandPromptsCreationParams).concat(
    initAddCommandPromptsAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddCommandPromptsFolder3 };
