import {
  CurrencyChoices,
  CurrencyChoicesActions,
  CurrencyChoicesUI,
} from "../CurrencyChoices/CurrencyChoices";

/**
 * Le design d'1 choix
 */
export function CurrencyLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisCurrency = CurrencyChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: CurrencyChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisCurrency,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisCurrency,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      CurrencyChoicesActions[choice]({
        choice: thisCurrency,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
