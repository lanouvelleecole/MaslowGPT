import { getChoicesArray } from './getChoicesArray.js';

function getChoicesStrings(promptData) {
  // si l'user à ajouté au moins 1 choix
  const conditionIsMet = promptData["choice_0_name"]?.length > 0;

  // les strings fr et anglais
  let strings = {
    fr: "",
    eng: "",
  };

  // ...alors on essaie d'extraire ces données de choix
  if (conditionIsMet) {
    // transforme le(s) choix, stockés dans promptData, en une liste de choix.
    //
    //
    const choicesArray = getChoicesArray(promptData);

    /**
     * pour chaque choix désiré par l'utilisateur,
     * on crée un string (français et anglais) pour AppStrings,
     * et on le concatene petit a petit
     */
    choicesArray.forEach((choiceArray, index) => {
      const choice_string_name = choiceArray[1];
      const choice_string_fr = choiceArray[2];
      const choice_string_eng = choiceArray[3];

      strings.eng += `\t\t${choice_string_name}: "${choice_string_eng}",\n`;
      strings.fr += `\t\t${choice_string_name}: "${choice_string_fr}",\n`;
    });
  }

  return strings;
}

export { getChoicesStrings };
