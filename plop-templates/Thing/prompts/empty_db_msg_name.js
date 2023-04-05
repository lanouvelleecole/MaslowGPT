import { userChoices } from "../prompts/askWhatUserWants.js";
import { GetUniqueID } from "../AddQuestion/pieces/GetUniqueID.js";
import { answers } from "../../../index.js";

const empty_db_msg_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_msg_name",
  message: `
***************************************************
*
* Quel est le nom du string multilingue contenant le message à afficher si la page est vide ?
*
***************************************************`,
  default: GetUniqueID(7),
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_name };
