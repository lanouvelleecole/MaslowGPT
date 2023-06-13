import path from "path";
import { initSetAiModelAndCie } from "./initSetAiModelAndCie.js";
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
function createSetAiModelFolder2(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const SetAiModelFolderPathFromAppRoot = `plop-SetAiModels/hbs-files/<SetAiModelFolderName>`;
  const SetAiModelFolderPath = path.join(
    getNPMFolderRoot(),
    SetAiModelFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const SetAiModelCreationParams = {
    SetAiModelFolderPath: SetAiModelFolderPath,
    SetAiModelFolderPathFromAppRoot: SetAiModelFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_SetAiModel_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the SetAiModel folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(SetAiModelCreationParams).concat(
    initSetAiModelAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createSetAiModelFolder2 };
