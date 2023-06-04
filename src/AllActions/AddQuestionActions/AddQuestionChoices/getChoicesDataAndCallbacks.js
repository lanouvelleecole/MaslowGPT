import { getChoicesArray } from "../AddFrenchStrings/getChoicesArray.js";

function getChoicesDataAndCallbacks(promptData) {
  // si l'user à ajouté au moins 1 choix
  const conditionIsMet = promptData["choice_0_name"]?.length > 0;

  // les donnees
  let strings = {
    choices_imports: "",
    choices: "",
    choices_ui: "",
    choices_callbacks: "",
    choices_callbacks_simple: "",
  };

  // ...alors on essaie d'extraire ces données de choix
  if (conditionIsMet) {
    // transforme le(s) choix, stockés dans promptData, en une liste de choix.
    //
    //
    const choicesArray = getChoicesArray(promptData);

    /**
     * pour chaque choix fournit par l'utilisateur,
     * on crée un string (français et anglais) pour AppStrings,
     * et on le concatene petit a petit
     */
    choicesArray.forEach((choiceArray, index) => {
      const choice_name = choiceArray[0];
      const choice_string_name = choiceArray[1];
      const choice_value = choiceArray[4];

      strings.choices_imports += `\n`;
      strings.choices += `\t${choice_name}: ${choice_value ?? index},\n`;
      strings.choices_ui += `\t${choice_name}: I18n.t("${choice_string_name}"),\n`;
      strings.choices_callbacks += `\t${choice_name}: ({ choice, answers, answer, answerIndex, currentItem }) => {},\n`;
      strings.choices_callbacks_simple += `\t${choice_name}: (data) => {},\n`;
    });
  }

  return strings;
}

export { getChoicesDataAndCallbacks };
