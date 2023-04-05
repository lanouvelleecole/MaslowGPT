/**
 * Les différents actions à effectuer, selon valeur de choix.
 *
 * N.B.: Tout Ceci est à considérer comme un template copiable/collable,
 * et réutilisable ailleurs, si nécessaire.
 * alors copie colle le selon besoins.
 *
 **/

import { CurrencyChoices } from "../CurrencyChoices/CurrencyChoices";

export const CurrencyChoicesCallbacks = {
  /* PLOP_INJECT_CHOICE_CALLBACK */
};

/**
 *
 * @param {*} value, le choix fait par l'user
 *
 * @returns ...... , fournie via callback
 */

export const CurrencyChoiceValue = (value) => {
  // le nom de key du choix effectué
  const choiceKeyName = CurrencyChoiceKey(value);

  // le style correspondant
  const choiceCallbackValue = CurrencyChoicesCallbacks[choiceKeyName]();

  return choiceCallbackValue;
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le nom du key selon valeur de choix
 */
export const CurrencyChoiceKey = (choice) => {
  var object = CurrencyChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return keyName;
};
