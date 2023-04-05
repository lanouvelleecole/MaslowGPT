import path from "path";
import { answers } from "../../../index.js";
import { Constants } from "./pieces/Constants.js";
import { getClosestJSFilesWithPattern } from "./pieces/getClosestJSFilesWithPattern.js";

const databaseinfo_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "databaseinfo_path",

    // Prompt to display on command line
    message: `
*************************************
Si besoin, quel est le path du fichier DatabaseInfo.js dans lequel créer un row ?
`,

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

      database_info_paths.unshift("<", Constants.noChoice);

      return database_info_paths;
    },
    when: (data) => {
      return answers.question_page_name?.length > 0;
    },
  };
};

export { databaseinfo_path };
