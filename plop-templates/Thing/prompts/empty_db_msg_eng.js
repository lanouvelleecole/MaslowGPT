import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const empty_db_msg_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_msg_eng",
  default: "Empty page. Fill me up, please !",
  message: `
*****************************************************
*
* Ecris le message de page vide, en Anglais
*
******************************************************`,
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_eng };
