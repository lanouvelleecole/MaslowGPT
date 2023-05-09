import I18n from "i18n-js";
import { userChoices } from "./askWhatUserWants.js";
import { GetUniqueID } from "../../services/GetUniqueID/GetUniqueID.js";
import { answers } from "../../../index.js";

const empty_db_btn_msg_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_btn_msg_name",
  message: I18n.t("x4BfDGln"),
  default: GetUniqueID(7),
  when: (data) => answers.what_we_wanna_do === userChoices.createPage,
};
export { empty_db_btn_msg_name };
