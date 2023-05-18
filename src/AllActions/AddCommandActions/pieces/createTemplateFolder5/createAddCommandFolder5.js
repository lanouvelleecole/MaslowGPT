import path from "path";
import { initTemplateAndCie } from "./initTemplateAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { toCamelCase } from "../../../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function createAddCommandFolder5(promptData) {
  // eslint-disable-next-line no-unused-vars
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateActions`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);

  const creationFolderFromAppRoot = `src/AllActions/${command_name_camel}`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: `Template`,
        replaceWordWith: `${command_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_name_camel}`,
      },
    ],
    wordsInFile: [
      {
        word: `Template`,
        replaceWordWith: `${command_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_name_camel}`,
      },
      {
        word: `create${command_name_camel}FromFolder`,
        replaceWordWith: `createTemplateFromFolder`,
      },
      {
        word: `Create${command_name_camel}FromFolder`,
        replaceWordWith: `CreateTemplateFromFolder`,
      },
    ],

    wordsInHBSFileName: {
      word: "template",
      replaceWordWith: `Item`,
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initTemplateAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddCommandFolder5 };
