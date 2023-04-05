/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (description_string_fr)
 *
 */
const description_string_fr = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "description_string_fr",

  // Prompt to display on command line
  message: `
*************************************
Ecris la description de la question (en Français)`,
};

export { description_string_fr };
