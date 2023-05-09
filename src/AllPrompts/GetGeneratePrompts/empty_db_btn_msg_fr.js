import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";

const empty_db_btn_msg_fr = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_btn_msg_fr",

  message: I18n.t("xNmBnPB6"),
  default: "Remplis moi !",
  when: (data) => answers.what_we_wanna_do === userChoices.createPage,
};
export { empty_db_btn_msg_fr };
