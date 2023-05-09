import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_page_name)
 *
 */
const question_page_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_page_name",

  // Prompt to display on command line
  message: I18n.t("xbPEjCEJ"),
};

export { question_page_name };
