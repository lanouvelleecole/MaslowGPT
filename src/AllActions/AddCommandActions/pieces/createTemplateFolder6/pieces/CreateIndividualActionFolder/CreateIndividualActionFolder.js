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
function CreateIndividualActionFolder(promptData, command_action_name, index) {
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateAction`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);
  const command_action_name_camel = toCamelCase(command_action_name);

  const creationFolderFromAppRoot = `src/AllActions/${command_name_camel}/pieces/PLOPActions/${command_action_name_camel}`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: `Template`,
        replaceWordWith: `${command_action_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_action_name_camel}`,
      },
    ],
    wordsInFile: [
      {
        word: `Template`,
        replaceWordWith: `${command_action_name_camel}`,
      },
      {
        word: `template`,
        replaceWordWith: `${command_action_name_camel}`,
      },
      {
        word: `create${command_action_name_camel}FromFolder`,
        replaceWordWith: `createTemplateFromFolder`,
      },
      {
        word: `Create${command_action_name_camel}FromFolder`,
        replaceWordWith: `CreateTemplateFromFolder`,
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
      command_action_name_camel: command_action_name_camel,
      command_name_camel,
    })
  );
}

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function CreateIndividualActionFolderAsync(
  promptData,
  command_action_name,
  index
) {
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateActionAsync`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);
  const command_action_name_camel = toCamelCase(command_action_name);

  const creationFolderFromAppRoot = `src/AllGenerators/Set${command_name_camel}AsyncActions/${command_action_name_camel}`;

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: `TemplateActionAsync`,
        replaceWordWith: `${command_action_name_camel}`,
      },
      {
        word: `templateActionAsync`,
        replaceWordWith: `${command_action_name_camel}`,
      },
    ],
    wordsInFile: [
      {
        word: `TemplateActionAsync`,
        replaceWordWith: `${command_action_name_camel}`,
      },
      {
        word: `templateActionAsync`,
        replaceWordWith: `${command_action_name_camel}`,
      },
    ],

    wordsInHBSFileName: {
      word: "TemplateActionAsync",
      replaceWordWith: `Item_${index}_`,
    },
  };

  return createTemplateFromFolder(templateCreationParams);
}

export { CreateIndividualActionFolder, CreateIndividualActionFolderAsync };
