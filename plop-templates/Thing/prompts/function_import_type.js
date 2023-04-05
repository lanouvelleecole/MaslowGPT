import { userChoices } from "../prompts/askWhatUserWants.js";
import { Constants } from "../AddQuestion/pieces/Constants.js";
import { getDataFromMaslowJSONObj } from "./getDataFromMaslowJSONObj.js";
import { answers } from "../../../index.js";

const function_import_type = (appRootPath) => {
  return {
    type: "list",
    message: `
**********************************************************
*
* Veux tu que l'import de fonction, 
* ait un path absolu (utile quand tu utilise le path aliasing), 
* ou relatif (si tu sais pas quoi choisir, choisis 'relatif') ?
*
***********************************************************`,
    name: "function_import_type",
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "function_import_type",
          appRootPath
        ) ?? Constants.pathRelatif
      );
    },
    choices: ["<", Constants.pathAbsolu, Constants.pathRelatif],
    when: function (data) {
      // le path du fichier .js dans lequel on utilise
      // la chose. ou null, si "On veut rien, capiche"
      const jsFileChoice = answers.ask_for_js_file;
      let actualJsFile =
        jsFileChoice != Constants.noChoice ? jsFileChoice : null;

      return (
        actualJsFile !== null &&
        answers.what_we_wanna_do === userChoices.createAIService
      );
    },
  };
};
export { function_import_type };
