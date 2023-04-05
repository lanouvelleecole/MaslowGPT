import { GetUniqueID } from "../pieces/GetUniqueID.js";

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
  message: `
*************************************
Quel est le nom du string multilingue de description de la question ?`,

  default: GetUniqueID(7),
};

export { description_string_name };
