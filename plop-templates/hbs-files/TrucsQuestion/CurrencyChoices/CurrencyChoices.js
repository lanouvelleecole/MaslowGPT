/* eslint-disable no-unused-vars */
/* PLOP_INJECT_IMPORT */
// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import I18n from "i18n-js";

/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const CurrencyChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */
  };
};

/* Les différents strings à afficher pour UI, selon choix */
export const CurrencyChoicesUI = () => {
  return {
    /* PLOP_INJECT_CHOICE_UI */
  };
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le string d'UI à afficher selon valeur de choix
 */
export const CurrencyChoiceUI = (choice) => {
  var object = CurrencyChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return CurrencyChoicesUI()[keyName];
};

/**
 * Les différents actions à effectuer, selon choix cliqué.
 *
 *
 **/
export const CurrencyChoicesActions = {
  /* PLOP_INJECT_CHOICE_ACTION */
};
