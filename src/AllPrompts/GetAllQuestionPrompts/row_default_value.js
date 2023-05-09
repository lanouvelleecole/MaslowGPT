import I18n from "i18n-js";
import { answers } from "../../../index.js";
const row_default_value = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  when: (data) => {
    return answers.row_name?.length > 0;
  },

  // Variable name for this input
  name: "row_default_value",

  // Prompt to display on command line
  message: I18n.t("xmrR9CoG"),
};

export { row_default_value };
