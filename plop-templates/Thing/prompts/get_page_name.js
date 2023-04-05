import { answers } from "../../../index.js";
import { userChoices } from "../prompts/askWhatUserWants.js";

const get_page_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_page_name",
  message: `
*********************************************
*
* Quel est le nom de la page dans laquelle on ajoute cette sous-page ?
*
**********************************************`,
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createSubpage;
  },
};
export { get_page_name };
