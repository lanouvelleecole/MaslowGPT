import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";

const empty_db_msg_src = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  default: "Page Vide. Remplis moi, stp !",
  name: "empty_db_msg_src",
  message: I18n.t("xWR7fhN"),
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_src };
