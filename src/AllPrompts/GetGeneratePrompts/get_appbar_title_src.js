import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";

const get_appbar_title_src = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_src",
  default: "Titre",
  message: I18n.t("xdffYAaj"),
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_src };
