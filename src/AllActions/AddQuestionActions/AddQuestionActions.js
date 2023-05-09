import path from "path";
import { initQuestionAndCie } from "./initQuestionAndCie.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { toPascalCase } from "../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 * @returns
 */
function AddQuestionActions(appRootPath, promptData) {
  const name = promptData["question_name"];
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsQuestion`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );
  const questionFolderPath = `${promptData["questionnaire_folder_path"]}/Questions/${namePascal}`;
  const defaultTextInput = promptData["question_default_textinput"];

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: questionFolderPath,
    wordsInFile: [
      {
        word: "Currency",
        replaceWordWith: namePascal,
      },

      {
        word: `"question_type"`,
        replaceWordWith: `"${promptData["question_type"]}"`,
      },

      {
        word: `"description_string_name"`,
        replaceWordWith: `"${promptData["description_string_name"]}"`,
      },

      {
        word: `"question_default_answer"`,
        replaceWordWith: promptData["question_default_answer"],
      },

      {
        word: `"question_default_textinput"`,
        replaceWordWith: `${
          defaultTextInput?.length > 0 ? defaultTextInput : `""`
        }`,
      },

      {
        word: `"question_on_textinput_changed"`,
        replaceWordWith: promptData["question_on_textinput_changed"] ?? 42,
      },

      {
        word: `"question_validity_condition"`,
        replaceWordWith: promptData["question_validity_condition"],
      },

      {
        word: `"error_string_name"`,
        replaceWordWith: `"${promptData["error_string_name"]}"`,
      },
    ],

    wordsInHBSFileName: {
      word: "Currency",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initQuestionAndCie({ questionFolderPath, promptData })
  );
}

export { AddQuestionActions };
