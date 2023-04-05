import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const get_appbar_title_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_eng",
  default: "Title",
  message: `
************************************************
*
* Ecris le texte à afficher dans l'appbar, en Anglais
*
*************************************************`,
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_eng };
