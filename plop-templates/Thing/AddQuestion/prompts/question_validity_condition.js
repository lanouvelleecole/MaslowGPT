/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_validity_condition)
 *
 */
const question_validity_condition = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_validity_condition",

  // Prompt to display on command line
  message: `
*************************************
Quelle est la condition booléene selon laquelle une réponse est valide ?
* Tu peux te servir de currentItem, le tout dernier item cliqué dessus dans une liste de données de page, si c'est une question qui crée/update des données de page.
* Si la question est de type "choices", un objet <QuestionName>Choices est crée, contenant tous les choix individuels de la liste de choix créee un peu plus tôt.
* Tu as aussi accès à: input, answers, answer, answerIndex`,
};

export { question_validity_condition };
