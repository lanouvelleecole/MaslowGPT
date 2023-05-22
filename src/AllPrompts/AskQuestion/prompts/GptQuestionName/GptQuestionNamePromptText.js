import I18n from "i18n-js";

import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const GptQuestionNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "GptQuestionName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("GptQuestionName") ?? "MaslowQNA";
    },

    message:
      I18n.t("xyP2WhM4") +
      `
${appRootPath}`,
  };
};

const GptQuestionNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "GptQuestionName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("GptQuestionName");
    },

    message: ``,
  };
};

export { GptQuestionNamePromptText, GptQuestionNamePromptEditor };
