import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";
import { getDataFromMaslowJSONObj } from "../../services/GetDataFromMaslowJSONObj/getDataFromMaslowJSONObj.js";

const get_ai_service_return_value = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "get_ai_service_return_value",
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "get_ai_service_return_value",
          appRootPath
        ) ?? "Retourne un nombre, x et y additionnés ensemble"
      );
    },
    editable: true,
    force: true,
    suggestOnly: false,
    message: (data) => `
${I18n.t("xOzxVGdq")} ${answers.get_ai_service_args}.
`,
    when: (data) => answers.what_we_wanna_do === userChoices.createAIService,
  };
};

export { get_ai_service_return_value };
