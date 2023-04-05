import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const empty_db_msg_fr = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  default: "Page Vide. Remplis moi, stp !",
  name: "empty_db_msg_fr",
  message: `
*******************************************************
*
* Ecris le message de page vide, en Français.
*
********************************************************`,
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_fr };
