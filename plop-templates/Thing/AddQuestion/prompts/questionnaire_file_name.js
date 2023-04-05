import { getAllJSFilesWithPattern } from "../../actions/getAllFilesWithPattern.js";
import path from "path";
import { answers } from "../../../../index.js";

/**
 *
 * *) Quel est le nom (avec extension) du fichier
 * contenant la liste de questions ?
 * (par défaut c'est QuestionList.js,
 * mais ca peut etre différent selon cas)
 *
 * (questionnaire_file_name)
 *
 */
const questionnaire_file_name = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    // Variable name for this input
    name: "questionnaire_file_name",

    // Prompt to display on command line
    message: (data) => {
      //console.log(`questionnaire path: ${fullQuestionnaireFolderPath}`);

      return `
*************************************
Quel est le nom (avec extension) du fichier contenant la liste de questions ?`;
    },

    default: (data) => {
      const full_questionnaire_folder_path = path.join(
        appRootPath,
        answers.questionnaire_folder_path
      );

      const questionnaire_list_path = getAllJSFilesWithPattern(
        full_questionnaire_folder_path,
        "* Ceci contient toutes les questions"
      )[0];

      return path.basename(questionnaire_list_path);
    },
  };
};

export { questionnaire_file_name };
