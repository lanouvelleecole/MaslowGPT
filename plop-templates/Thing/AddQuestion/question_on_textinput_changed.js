import { answers } from "../../../index.js";
import { userChoices } from "./prompts/question_type.js";

const question_on_textinput_changed = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_on_textinput_changed",

  when: (data) => {
    return (
      answers.question_type == userChoices.textQuestion ||
      answers.question_type == userChoices.numQuestion
    );
  },

  // Prompt to display on command line
  message: `
*************************************
Que veux-tu faire à chaque fois que le contenu du TextInput à changé ? (si besoin)

* Tu peux te servir de newText, le contenu actuel du TextInput, après changements.
* Tu peux te servir de currentItem, le tout dernier item cliqué dessus 
* Tu peux te servir de SaveCurrentItem, la callback de sauvegarde des données de currentItem. Ceci permet entre autre de sauvegarder newText. Par ex.:
* currentItem != null ? SaveCurrentItem({ ...currentItem, property: newText }) : 42;`,
};
export { question_on_textinput_changed };
