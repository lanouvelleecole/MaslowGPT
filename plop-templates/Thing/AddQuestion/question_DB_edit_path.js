import path from "path";
import { answers } from "../../../index.js";
import { Constants } from "./pieces/Constants.js";
import { getClosestJSFilesWithPattern } from "./pieces/getClosestJSFilesWithPattern.js";

const question_DB_edit_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "question_DB_edit_path",

    // Prompt to display on command line
    message: `
*************************************
Quel est le path du fichier .js où on modifie la réponse, via SqliteRedux<PageName>.UpdateSpecificRowsFromDB ?`,

    choices: (data) => {
      const page_path = path.join(
        appRootPath,
        `src/pages/${answers.question_page_name}`
      );

      const questionnaire_list_paths = getClosestJSFilesWithPattern(
        page_path,
        "PLOP_INJECT_VALUE_IN_DB",
        `src/pages/${answers.question_page_name}`
      );

      questionnaire_list_paths.unshift("<", Constants.noChoice);

      return questionnaire_list_paths;
    },
    when: (data) => {
      return answers.question_page_name?.length > 0;
    },
  };
};

export { question_DB_edit_path };
