import path from "path";
import { initTemplateAndCie } from "./initTemplateAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { toCamelCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { AddQuotesAroundWord } from "../../../../services/AddQuotesAroundWord/AddQuotesAroundWord.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function createAddCommandFolder7(promptData) {
  const command_prompts_names_str = promptData["AddCommandPrompts"];
  let command_prompts_names = [];

  command_prompts_names_str?.length > 0
    ? (command_prompts_names = JSON.parse(
        `[${AddQuotesAroundWord(command_prompts_names_str)}]`
      ))
    : 42;

  if (command_prompts_names?.length > 0) return [];

  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateImpromptuCommand`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);

  const creationFolderFromAppRoot = `src/AllGenerators/${command_name_camel}ImpromptuCommand`;

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

export { createAddCommandFolder7 };
