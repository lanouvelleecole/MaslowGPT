import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AffineDeletePathPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineDeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineDeletePath");
    },

    message: I18n.t("xaelffhs") + ` ${appRootPath}`,
  };
};

// ## MaslowGPT

const AffineDeletePathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineDeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineDeletePath");
    },

    message: ``,
  };
};

export { AffineDeletePathPromptText, AffineDeletePathPromptEditor };
