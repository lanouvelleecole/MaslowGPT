import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_default_answer)
 *
 */
const question_default_answer = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_default_answer",

  // Prompt to display on command line
  message: I18n.t("x5yXb69D"),
};

export { question_default_answer };
