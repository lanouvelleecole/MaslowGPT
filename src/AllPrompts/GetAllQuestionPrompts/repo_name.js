import I18n from "i18n-js";
/**
 *
 * *) Quel est le nom du repositoire contenant les strings multilingues ? (par défaut AppStrings)
 *
 * (repo_name)
 *
 */
const repo_name = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    // Variable name for this input
    name: "repo_name",

    default: "AppStrings",

    // Prompt to display on command line
    message: I18n.t("xfMNdApA"),
  };
};

export { repo_name };
