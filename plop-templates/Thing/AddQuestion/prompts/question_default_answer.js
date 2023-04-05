/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_default_answer)
 *
 */
const question_default_answer = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_default_answer",

  // Prompt to display on command line
  message: `
*************************************
Quelle est la réponse par défaut à assigner à la question ?

* Tu peux te servir de: currentItem, le tout dernier item cliqué dessus.
* Si la question est de type "choices", un objet <QuestionName>Choices est crée, contenant tous les choix individuels de la liste de choix créee un peu plus tôt.`,
};

export { question_default_answer };
