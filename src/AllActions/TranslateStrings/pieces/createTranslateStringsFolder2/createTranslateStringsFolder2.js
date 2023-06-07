import path from "path";
import { initTranslateStringsAndCie } from "./initTranslateStringsAndCie.js";
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
function createTranslateStringsFolder2(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const TranslateStringsFolderPathFromAppRoot = `plop-TranslateStringss/hbs-files/<TranslateStringsFolderName>`;
  const TranslateStringsFolderPath = path.join(
    getNPMFolderRoot(),
    TranslateStringsFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const TranslateStringsCreationParams = {
    TranslateStringsFolderPath: TranslateStringsFolderPath,
    TranslateStringsFolderPathFromAppRoot: TranslateStringsFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_TranslateStrings_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the TranslateStrings folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(TranslateStringsCreationParams).concat(
    initTranslateStringsAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createTranslateStringsFolder2 };
