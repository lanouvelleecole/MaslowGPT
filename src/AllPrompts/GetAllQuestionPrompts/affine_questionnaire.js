import I18n from "i18n-js";
/**
 *
 *
 * (affine_questionnaire)
 *
 */
const affine_questionnaire = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "affine_questionnaire",

  // Prompt to display on command line
  message: I18n.t("x6hYuqBl"),
};

export { affine_questionnaire };
