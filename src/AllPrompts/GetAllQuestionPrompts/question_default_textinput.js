import I18n from "i18n-js";
import { answers } from '../../../index.js';
import { userChoices } from './question_type.js';

/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_default_textinput)
 *
 */
const question_default_textinput = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_default_textinput",

  when: (data) => {
    return (
      answers.question_type == userChoices.textQuestion ||
      answers.question_type == userChoices.numQuestion
    );
  },

  // Prompt to display on command line
  message: I18n.t("xO3KYhe7"),
};

export { question_default_textinput };
