import I18n from "i18n-js";
import { userChoices } from "../../../src/AllPrompts/GetGeneratePrompts/askWhatUserWants.js";
import { answers } from "../../../index.js";
import { GetUniqueID } from "../../services/GetUniqueID/GetUniqueID.js";

const empty_db_msg_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_msg_name",
  message: I18n.t("xXiQp9c"),
  default: GetUniqueID(7),
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_name };
