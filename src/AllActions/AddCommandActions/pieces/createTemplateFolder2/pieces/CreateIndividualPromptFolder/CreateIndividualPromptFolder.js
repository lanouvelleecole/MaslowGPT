import path from "path";
import { initTemplateAndCie } from "../../initTemplateAndCie.js";
import { getNPMFolderRoot } from "../../../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { toCamelCase } from "../../../../../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function CreateIndividualPromptFolder(promptData, command_prompt_name, index) {
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplatePrompt`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);
  const command_prompt_name_camel = toCamelCase(command_prompt_name);

  const creationFolderFromAppRoot = `src/AllPrompts/${command_name_camel}/prompts/${command_prompt_name_camel}`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: `Template`,
        replaceWordWith: `${command_prompt_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_prompt_name_camel}`,
      },
    ],
    wordsInFile: [
      {
        word: `Template`,
        replaceWordWith: `${command_prompt_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_prompt_name_camel}`,
      },
      {
        word: `create${command_prompt_name_camel}FromFolder`,
        replaceWordWith: `createTemplateFromFolder`,
      },
      {
        word: `Create${command_prompt_name_camel}FromFolder`,
        replaceWordWith: `CreateTemplateFromFolder`,
      },
      {
        word: `<prompt_name>`,
        replaceWordWith: `${command_prompt_name_camel}`,
      },
    ],

    wordsInHBSFileName: {
      word: "template",
      replaceWordWith: `Item_${index}_`,
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initTemplateAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
      command_prompt_name_camel,
      command_name_camel,
    })
  );
}

export { CreateIndividualPromptFolder };
