import { answers } from "../../../../index.js";
import { userChoices } from "./question_type.js";

/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_default_textinput)
 *
 */
const question_default_textinput = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_default_textinput",

  when: (data) => {
    return (
      answers.question_type == userChoices.textQuestion ||
      answers.question_type == userChoices.numQuestion
    );
  },

  // Prompt to display on command line
  message: `
*************************************
Quel est le contenu par défaut du TextInput ?

* Tu peux te servir de currentItem, le tout dernier item cliqué dessus dans une liste de données de page, si c'est une question qui crée/update des données de page.
* Tu as aussi accès à: answers, answer, answerIndex`,
};

export { question_default_textinput };
