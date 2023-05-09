import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";
import { getDataFromMaslowJSONObj } from "../../services/GetDataFromMaslowJSONObj/getDataFromMaslowJSONObj.js";

const get_ai_service_args = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "get_ai_service_args",
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(answers, "get_ai_service_args", appRootPath) ??
        "x (un nombre, à additioner à y), y (un nombre, à additionner à x)"
      );
    },
    editable: true,
    force: true,
    suggestOnly: false,
    message: I18n.t("xh18KqCT"),
    when: (data) => answers.what_we_wanna_do === userChoices.createAIService,
  };
};

export { get_ai_service_args };
