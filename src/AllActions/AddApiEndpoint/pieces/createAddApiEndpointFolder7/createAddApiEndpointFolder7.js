import path from "path";
import { initAddApiEndpointAndCie } from "./initAddApiEndpointAndCie.js";
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
function createAddApiEndpointFolder7(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const AddApiEndpointFolderPathFromAppRoot = `plop-AddApiEndpoints/hbs-files/<AddApiEndpointFolderName>`;
  const AddApiEndpointFolderPath = path.join(
    getNPMFolderRoot(),
    AddApiEndpointFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const AddApiEndpointCreationParams = {
    AddApiEndpointFolderPath: AddApiEndpointFolderPath,
    AddApiEndpointFolderPathFromAppRoot: AddApiEndpointFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_AddApiEndpoint_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the AddApiEndpoint folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(AddApiEndpointCreationParams).concat(
    initAddApiEndpointAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddApiEndpointFolder7 };
