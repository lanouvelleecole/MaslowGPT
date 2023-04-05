import { userChoices } from "./askWhatUserWants.js";
import { Constants } from "../AddQuestion/pieces/Constants.js";
import { getDataFromMaslowJSONObj } from "./getDataFromMaslowJSONObj.js";
import { answers } from "../../../index.js";

const function_returns_or_not = (appRootPath) => {
  return {
    type: "list",
    message: `
*******************************************************
*
* Veux tu que le code utilisant la fonction, ait une ligne de retour, ou pas ?
*
*******************************************************`,
    name: "function_returns_or_not",
    choices: ["<", Constants.returnLine, Constants.noReturnLine],
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "function_returns_or_not",
          appRootPath
        ) ?? Constants.noReturnLine
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
export { function_returns_or_not };
