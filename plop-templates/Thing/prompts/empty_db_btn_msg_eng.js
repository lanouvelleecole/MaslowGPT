import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const empty_db_btn_msg_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_btn_msg_eng",
  default: "Fill me",
  message: `
********************************************
* 
* Ecris le message du bouton de création d'item de page, en Anglais
*
********************************************`,
  when: (data) => answers.what_we_wanna_do === userChoices.createPage,
};
export { empty_db_btn_msg_eng };
