import I18n from "i18n-js";
import { GetUniqueID } from '../../services/GetUniqueID/GetUniqueID.js';
import { userChoices } from './question_type.js';
import { answers } from '../../../index.js';

function question_choices(howMany) {
  const basket = [];
  for (let i = 0; i < howMany; i++) {
    basket.push({
      type: "input",

      filter: function (answer) {
        // Use the trim() method to remove whitespace from both sides of the answer
        return answer.trim();
      },

      name: `choice_${i}_name`,
      message: I18n.t("xfNgw7Hy"),
      when: (data) => {
        if (i === 0) {
          return answers.question_type === userChoices.choiceQuestion;
        }
        return (
          answers[`choice_${i - 1}_name`] &&
          answers[`choice_${i - 1}_name`].length > 0
        );
      },
    });
    basket.push({
      type: "input",

      filter: function (answer) {
        // Use the trim() method to remove whitespace from both sides of the answer
        return answer.trim();
      },

      name: `choice_${i}_string_name`,
      message:
        "*********************\nDonne le nom du string multilingue contenant la description du choix.",
      default: GetUniqueID(7),
      when: (data) => {
        return (
          answers[`choice_${i}_name`] && answers[`choice_${i}_name`].length > 0
        );
      },
    });
    basket.push({
      type: "input",

      filter: function (answer) {
        // Use the trim() method to remove whitespace from both sides of the answer
        return answer.trim();
      },

      name: `choice_${i}_string_fr`,
      message:
        "*********************\nEcris une description du choix, en Français.",
      when: (data) => {
        return (
          answers[`choice_${i}_name`] && answers[`choice_${i}_name`].length > 0
        );
      },
    });
    basket.push({
      type: "input",

      filter: function (answer) {
        // Use the trim() method to remove whitespace from both sides of the answer
        return answer.trim();
      },

      name: `choice_${i}_string_eng`,
      message:
        "*********************\nEcris une description du choix, en Anglais.",
      when: (data) => {
        return (
          answers[`choice_${i}_name`] && answers[`choice_${i}_name`].length > 0
        );
      },
    });
    basket.push({
      type: "input",

      filter: function (answer) {
        // Use the trim() method to remove whitespace from both sides of the answer
        return answer.trim();
      },

      name: `choice_${i}_value`,
      message:
        "*********************\nDonne une valeur à ce choix. Ou laisse ici vide, et appuie sur Entrée, et une valeur par défaut sera assignée à ce choix",
      when: (data) => {
        return (
          answers[`choice_${i}_name`] && answers[`choice_${i}_name`].length > 0
        );
      },
    });
  }
  return basket;
}

export { question_choices };
