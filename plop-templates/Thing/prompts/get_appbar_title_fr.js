import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const get_appbar_title_fr = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_fr",
  default: "Titre",
  message: `
*****************************************************
*
* Ecris le texte à afficher dans l'appbar, en Français
*
*****************************************************`,
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_fr };
