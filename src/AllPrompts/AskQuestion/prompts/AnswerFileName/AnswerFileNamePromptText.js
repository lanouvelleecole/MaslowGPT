import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AnswerFileNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AnswerFileName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AnswerFileName") ?? "answer.txt";
    },

    message: I18n.t("xCsHHNE"),
  };
};

const AnswerFileNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AnswerFileName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AnswerFileName");
    },

    message: `Text me bby`,
  };
};

export { AnswerFileNamePromptText, AnswerFileNamePromptEditor };
