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
  message: `
*************************************
Partant du dossier racine de l'application, donne une approximation du dossier dans lequel se trouve le questionnaire.`,
};

export { affine_questionnaire };
