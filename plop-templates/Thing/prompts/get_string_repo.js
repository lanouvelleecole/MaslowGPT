import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";

const get_string_repo = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_string_repo",
  message: `
*******************************************************
*
* Quel est le nom du répositoire de strings multilingue dans lequel on stocke 
* les divers messages de page/subpage qui te seront demandés sous peu ?
*
*******************************************************`,
  default: "AppStrings",
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_string_repo };
