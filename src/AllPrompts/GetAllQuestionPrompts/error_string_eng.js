import I18n from "i18n-js";
import { answers, OPENAI_API_KEY } from '../../../index.js';
import { TranslateText } from '../../services/TranslateText/TranslateText.js';

/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (error_string_eng)
 *
 */
const error_string_eng = {
  type: "input",

  default: (data) =>
    Promise.resolve(
      TranslateText({
        text: answers.error_string_fr,
        language: "english",
        apiKey: OPENAI_API_KEY,
      })
    ),

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "error_string_eng",

  // Prompt to display on command line
  message: I18n.t("xZlP7ykZ"),
};

export { error_string_eng };
