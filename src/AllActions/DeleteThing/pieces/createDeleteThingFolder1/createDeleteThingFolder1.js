import path from "path";
import { initDeleteThingAndCie } from "./initDeleteThingAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";

/**
 *
 *
 * Ici, crée ton dossier DeleteThing, en détail.
 *
 * Remplace les trucs <comme ceci> par ce qu'il faut, selon description.
 */
function createDeleteThingFolder1(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const DeleteThingFolderPathFromAppRoot = `plop-DeleteThings/hbs-files/<DeleteThingFolderName>`;
  const DeleteThingFolderPath = path.join(
    getNPMFolderRoot(),
    DeleteThingFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const DeleteThingCreationParams = {
    DeleteThingFolderPath: DeleteThingFolderPath,
    DeleteThingFolderPathFromAppRoot: DeleteThingFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_DeleteThing_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the DeleteThing folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(DeleteThingCreationParams).concat(
    initDeleteThingAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createDeleteThingFolder1 };
