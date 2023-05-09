import I18n from "i18n-js";
import path from "path";
import { answers } from '../../../index.js';
import { Constants } from '../../AppConstants/Constants.js';
import { getClosestJSFilesWithPattern } from '../../services/GetClosestJSFilesWithPattern/getClosestJSFilesWithPattern.js';

const question_DB_edit_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "question_DB_edit_path",

    // Prompt to display on command line
    message: I18n.t("xPFSRaqF"),

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

      questionnaire_list_paths.unshift(Constants.noChoice, "<");

      return questionnaire_list_paths;
    },
    when: (data) => {
      return answers.question_page_name?.length > 0;
    },
  };
};

export { question_DB_edit_path };
