import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const PkgNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "PkgName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("PkgName");
    },

    message: I18n.t('xHTGSmLj'),
  };
};

const PkgNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "PkgName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("PkgName");
    },

    message: `Text me bby`,
  };
};

export { PkgNamePromptText, PkgNamePromptEditor };
