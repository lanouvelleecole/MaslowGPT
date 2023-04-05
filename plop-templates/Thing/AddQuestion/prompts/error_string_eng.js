/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (error_string_eng)
 *
 */
const error_string_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "error_string_eng",

  // Prompt to display on command line
  message: `
*************************************
Ecris le message d'erreur de la question (en Anglais)`,
};

export { error_string_eng };