import { userChoices } from "./askWhatUserWants.js";
import { Constants } from "../AddQuestion/pieces/Constants.js";
import { getDataFromMaslowJSONObj } from "./getDataFromMaslowJSONObj.js";
import { answers } from "../../../index.js";

const delete_function_body_or_not = (appRootPath) => {
  return {
    type: "list",
    message: (data) => `
*******************************************************
*
* Veux tu supprimer le body de la fonction ayant /* PLOP_INJECT_CODE */ en commentaire, 
* dans le fichier suivant: ${answers.ask_for_js_file} ?
*
*******************************************************`,
    name: "delete_function_body_or_not",
    choices: ["<", Constants.yes, Constants.no],
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "delete_function_body_or_not",
          appRootPath
        ) ?? Constants.no
      );
    },
    when: function (data) {
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
export { delete_function_body_or_not };
