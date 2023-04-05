import { userChoices } from "../prompts/askWhatUserWants.js";
import { GetUniqueID } from "../AddQuestion/pieces/GetUniqueID.js";
import { answers } from "../../../index.js";

const get_appbar_title_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_name",
  message: `
**************************************************
*
* Quel est le nom du string multilingue contenant le texte de l'appbar ?
*
**************************************************`,
  default: GetUniqueID(7),
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_name };
