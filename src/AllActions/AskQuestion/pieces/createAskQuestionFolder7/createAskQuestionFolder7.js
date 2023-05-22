import path from "path";
import { initAskQuestionAndCie } from "./initAskQuestionAndCie.js";
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
function createAskQuestionFolder7(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const AskQuestionFolderPathFromAppRoot = `plop-AskQuestions/hbs-files/<AskQuestionFolderName>`;
  const AskQuestionFolderPath = path.join(
    getNPMFolderRoot(),
    AskQuestionFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const AskQuestionCreationParams = {
    AskQuestionFolderPath: AskQuestionFolderPath,
    AskQuestionFolderPathFromAppRoot: AskQuestionFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_AskQuestion_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the AskQuestion folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(AskQuestionCreationParams).concat(
    initAskQuestionAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAskQuestionFolder7 };
