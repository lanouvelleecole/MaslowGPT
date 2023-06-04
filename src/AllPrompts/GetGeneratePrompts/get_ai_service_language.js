import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";
import { getDataFromMaslowJSONObj } from "../../services/GetDataFromMaslowJSONObj/getDataFromMaslowJSONObj.js";

const get_ai_service_language = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "get_ai_service_language",
    default: (data) => {
      /**
       * Par défaut:
       *
       * le texte dans <func_root>/prompts/get_ai_service_language.txt,
       *
       * ou Maslow_Json["get_ai_service_language"], dans <func_root>/Maslow.json,
       *
       * ou "node"
       */
      return (
        getDataFromMaslowJSONObj(
          answers,
          "get_ai_service_language",
          appRootPath
        ) ?? "javascript (import/export)"
      );
    },
    editable: true,
    force: true,
    suggestOnly: false,
    message: I18n.t("xVbAbBWr"),
    when: (data) => answers.what_we_wanna_do === userChoices.createAIService,
  };
};

export { get_ai_service_language };
