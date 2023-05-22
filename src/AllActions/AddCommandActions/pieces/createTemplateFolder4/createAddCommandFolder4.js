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
function createAddCommandFolder4(promptData) {
  // eslint-disable-next-line no-unused-vars
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/SetAskQuestionAsyncActions`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);

  const creationFolderFromAppRoot = `src/AllGenerators/Set${command_name_camel}AsyncActions`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: `AskQuestion`,
        replaceWordWith: command_name_camel,
      },
      {
        word: `AskQuestion`,
        replaceWordWith: command_name_camel,
      },
    ],
    wordsInFile: [
      {
        word: `AskQuestion`,
        replaceWordWith: command_name_camel,
      },
      {
        word: `AskQuestion`,
        replaceWordWith: command_name_camel,
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
      word: "AskQuestion",
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

export { createAddCommandFolder4 };
