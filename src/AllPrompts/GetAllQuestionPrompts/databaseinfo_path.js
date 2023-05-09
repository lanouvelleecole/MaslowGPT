import I18n from "i18n-js";
import path from "path";
import { answers } from '../../../index.js';
import { Constants } from '../../AppConstants/Constants.js';
import { getClosestJSFilesWithPattern } from '../../services/GetClosestJSFilesWithPattern/getClosestJSFilesWithPattern.js';

const databaseinfo_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "databaseinfo_path",

    // Prompt to display on command line
    message: I18n.t("xNJobvTO"),

    choices: (data) => {
      const search_path = path.join(
        appRootPath,
        `src/reduxState/${answers.question_page_name}`
      );

      const database_info_paths = getClosestJSFilesWithPattern(
        search_path,
        "export const rowNamesAndTypes = {",
        `src/reduxState/${answers.question_page_name}`
      );

      database_info_paths.unshift(Constants.noChoice, "<");

      return database_info_paths;
    },
    when: (data) => {
      return answers.question_page_name?.length > 0;
    },
  };
};

export { databaseinfo_path };
