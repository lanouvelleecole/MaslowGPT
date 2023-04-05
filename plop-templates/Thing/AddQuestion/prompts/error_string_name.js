import { GetUniqueID } from "../pieces/GetUniqueID.js";

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
  message: `
*************************************
Quel est le nom du string multilingue du message d'erreur de la question ?`,

  default: GetUniqueID(7),
};

export { error_string_name };
