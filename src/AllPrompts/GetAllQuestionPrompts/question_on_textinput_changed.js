import I18n from "i18n-js";
import { answers } from '../../../index.js';
import { userChoices } from './question_type.js';

const question_on_textinput_changed = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_on_textinput_changed",

  when: (data) => {
    return (
      answers.question_type == userChoices.textQuestion ||
      answers.question_type == userChoices.numQuestion
    );
  },

  // Prompt to display on command line
  message: I18n.t("xRPTbEV"),
};
export { question_on_textinput_changed };
