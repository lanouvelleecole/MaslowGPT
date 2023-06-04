import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (description_string_src)
 *
 */
const description_string_src = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "description_string_src",

  // Prompt to display on command line
  message: I18n.t("xIuC3fIz"),
};

export { description_string_src };
