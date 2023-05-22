import path from "path";
import { initDuplicateThingAndCie } from "./initDuplicateThingAndCie.js";
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
function createDuplicateThingFolder2(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const DuplicateThingFolderPathFromAppRoot = `plop-DuplicateThings/hbs-files/<DuplicateThingFolderName>`;
  const DuplicateThingFolderPath = path.join(
    getNPMFolderRoot(),
    DuplicateThingFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const DuplicateThingCreationParams = {
    DuplicateThingFolderPath: DuplicateThingFolderPath,
    DuplicateThingFolderPathFromAppRoot: DuplicateThingFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_DuplicateThing_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the DuplicateThing folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(DuplicateThingCreationParams).concat(
    initDuplicateThingAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createDuplicateThingFolder2 };
