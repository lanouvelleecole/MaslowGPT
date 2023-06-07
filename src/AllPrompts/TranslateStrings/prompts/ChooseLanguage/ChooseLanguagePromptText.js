import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const ChooseLanguagePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseLanguage",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseLanguage");
    },

    message: `Text me bby`,
  };
};

const ChooseLanguagePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseLanguage",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseLanguage");
    },

    message: `Text me bby`,
  };
};

export { ChooseLanguagePromptText, ChooseLanguagePromptEditor };
