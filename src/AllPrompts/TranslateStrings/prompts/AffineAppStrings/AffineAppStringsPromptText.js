import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AffineAppStringsPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineAppStrings",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineAppStrings");
    },

    message:
      I18n.t('xLwA536O'),
  };
};

const AffineAppStringsPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineAppStrings",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineAppStrings");
    },

    message: `Text me bby`,
  };
};

export { AffineAppStringsPromptText, AffineAppStringsPromptEditor };
