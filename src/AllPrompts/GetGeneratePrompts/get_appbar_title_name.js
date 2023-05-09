import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { GetUniqueID } from "../../services/GetUniqueID/GetUniqueID.js";
import { userChoices } from "./askWhatUserWants.js";

const get_appbar_title_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_name",
  message: I18n.t("xAR6qqzl"),
  default: GetUniqueID(7),
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_name };
