import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (error_string_src)
 *
 */
const error_string_src = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "error_string_src",

  default: "Oups... Cette valeur n'est pas valide.",

  // Prompt to display on command line
  message: I18n.t("xovQnXlQ"),
};

export { error_string_src };
