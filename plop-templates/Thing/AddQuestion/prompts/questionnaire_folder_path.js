import path from "path";
import { getPathWithForwardSlashes } from "../../actions/getPathWithForwardSlashes.js";
import { answers } from "../../../../index.js";
import { getAllQuestionnaireFolders } from "../../actions/getAllQuestionnaireFolders.js";

/**
 *
 * *) Partant du dossier src, quel est le path du dossier
 * contenant le questionnaire ?
 *
 * (questionnaire_folder_path)
 *
 */
const questionnaire_folder_path = (appRootPath) => {
  return {
    type: "list",

    // Variable name for this input
    name: "questionnaire_folder_path",

    // Prompt to display on command line
    message: `
*************************************
* Partant du dossier ${appRootPath}, 
* quel est le path du dossier contenant le questionnaire ?`,

    choices: (data) => {
      const approx_folder = answers.affine_questionnaire;
      const full_approx_folder = path.join(appRootPath, approx_folder);

      const allQuestionnaireFolders = getAllQuestionnaireFolders(
        full_approx_folder,
        "* Ceci contient toutes les questions"
      ).map((folderPath) =>
        getPathWithForwardSlashes(path.join(approx_folder, folderPath))
      );

      allQuestionnaireFolders?.sort();

      allQuestionnaireFolders.unshift("<");

      return allQuestionnaireFolders;
    },
  };
};

export { questionnaire_folder_path };
