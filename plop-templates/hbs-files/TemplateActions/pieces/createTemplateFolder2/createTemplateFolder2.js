import path from "path";
import { initTemplateAndCie } from "./initTemplateAndCie.js";
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
function createTemplateFolder2(promptData) {
  // eslint-disable-next-line no-unused-vars
  const prompt_value = promptData["<prompt_value>"];
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/<TemplateFolderName>`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `<some/path/to/a/folder/starting/from/approot>`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "<some keyword in the input js files>",
        replaceWordWith: `<replacement value>`,
      },
    ],
    wordsInFile: [
      {
        word: `<some keyword_in_the_template_folder>`,
        replaceWordWith: `<some replacement value>`,
      },
    ],

    wordsInHBSFileName: {
      word: "<some keyword to replace in the filenames of files in the template folder>",
      replaceWordWith: `<the replacement value>`,
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initTemplateAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createTemplateFolder2 };
