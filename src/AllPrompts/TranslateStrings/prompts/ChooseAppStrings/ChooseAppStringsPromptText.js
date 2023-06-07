import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const ChooseAppStringsPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseAppStrings",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseAppStrings");
    },

    message:
      I18n.t('x6zDMY6l'),
  };
};

const ChooseAppStringsPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseAppStrings",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseAppStrings");
    },

    message: `Text me bby`,
  };
};

export { ChooseAppStringsPromptText, ChooseAppStringsPromptEditor };
