import I18n from "i18n-js";
import { userChoices } from "./askWhatUserWants.js";
import { Constants } from "../../AppConstants/Constants.js";
import { getDataFromMaslowJSONObj } from "../../services/GetDataFromMaslowJSONObj/getDataFromMaslowJSONObj.js";
import { answers } from "../../../index.js";

const function_import_type = (appRootPath) => {
  return {
    type: "list",

    message: I18n.t("x476CB9d"),
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
    choices: [Constants.pathAbsolu, Constants.pathRelatif, "<"],
    when: function (data) {
      // le path du fichier dans lequel on utilise
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
