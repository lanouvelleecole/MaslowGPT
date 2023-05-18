import path from "path";
import { initAddCommandAndCie } from "./initAddCommandAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { toCamelCase } from "../../../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 *
 * Ici, crée ton dossier template, en détail.
 *
 * Remplace les trucs <comme ceci> par ce qu'il faut, selon description.
 */
function createAddCommandFolder1(promptData) {
  // eslint-disable-next-line no-unused-vars

  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);

  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TemplatePrompts`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = `src/AllPrompts/${command_name_camel}`;

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
      replaceWordWith: `${command_name_camel}`,
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initAddCommandAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddCommandFolder1 };
