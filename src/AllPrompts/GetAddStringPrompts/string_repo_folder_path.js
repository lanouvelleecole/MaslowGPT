import I18n from "i18n-js";
import path from "path";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { answers } from "../../../index.js";
import { getAllFoldersWithPattern } from "../getAllFoldersWithPattern/getAllFoldersWithPattern.js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

/**
 *
 * *) Partant du dossier src, quel est le path du dossier
 * contenant le questionnaire ?
 *
 * (string_repo_folder_path)
 *
 */
const string_repo_folder_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "string_repo_folder_path",

    default: (data) => {
      //console.log(`answers: ${JSON.stringify(answers)}`);

      return (
        getDataFromNPMMaslowJSON("string_repo_folder_path") ?? "src/AppStrings"
      );
    },
    // Prompt to display on command line
    message: `${I18n.t("xO1Q5Gfr")} ${appRootPath} ?`,

    choices: (data) => {
      const approx_folder = answers.affine_string_repo;
      const full_approx_folder = getPathWithForwardSlashes(
        path.join(appRootPath, approx_folder)
      );

      const all_string_repo_folders = getAllFoldersWithPattern(
        full_approx_folder,
        "PLOP_INJECT_SRC_STRING"
      ).map((folderPath) =>
        getPathWithForwardSlashes(path.join(approx_folder, folderPath))
      );

      all_string_repo_folders?.sort();

      all_string_repo_folders.push("<");

      return all_string_repo_folders;
    },
  };
};

export { string_repo_folder_path };
