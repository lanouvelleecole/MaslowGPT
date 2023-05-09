import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_validity_condition)
 *
 */
const question_validity_condition = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_validity_condition",

  // Prompt to display on command line
  message: I18n.t("xS03Pei"),
};

export { question_validity_condition };
