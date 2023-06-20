import path from "path";
import { initCreateNpmPackageAndCie } from "./initCreateNpmPackageAndCie.js";
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
function createCreateNpmPackageFolder6(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const CreateNpmPackageFolderPathFromAppRoot = `plop-CreateNpmPackages/hbs-files/<CreateNpmPackageFolderName>`;
  const CreateNpmPackageFolderPath = path.join(
    getNPMFolderRoot(),
    CreateNpmPackageFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const CreateNpmPackageCreationParams = {
    CreateNpmPackageFolderPath: CreateNpmPackageFolderPath,
    CreateNpmPackageFolderPathFromAppRoot: CreateNpmPackageFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_CreateNpmPackage_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the CreateNpmPackage folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(CreateNpmPackageCreationParams).concat(
    initCreateNpmPackageAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createCreateNpmPackageFolder6 };
