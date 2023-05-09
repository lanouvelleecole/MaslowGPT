import I18n from "i18n-js";
import { GetUniqueID } from '../../services/GetUniqueID/GetUniqueID.js';

/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (error_string_name)
 *
 */
const error_string_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "error_string_name",

  // Prompt to display on command line
  message: I18n.t("xiJ3sBf9"),

  default: GetUniqueID(7),
};

export { error_string_name };
