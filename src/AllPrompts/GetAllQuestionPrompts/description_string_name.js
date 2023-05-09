import I18n from "i18n-js";
import { GetUniqueID } from '../../services/GetUniqueID/GetUniqueID.js';

/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (description_string_name)
 *
 */
const description_string_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "description_string_name",

  // Prompt to display on command line
  message: I18n.t("xeX4c0nd"),

  default: GetUniqueID(7),
};

export { description_string_name };
