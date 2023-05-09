import I18n from "i18n-js";
const row_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "row_name",

  // Prompt to display on command line
  message: I18n.t("xMS0fGna"),
};

export { row_name };
