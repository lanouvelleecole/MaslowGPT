import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AffineOriginalPathPromptText = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineOriginalPath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineOriginalPath");
    },

    message: I18n.t("xdWkLeQ") + ` ${appRootPath}`,
  };
};

const AffineOriginalPathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineOriginalPath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineOriginalPath");
    },

    message: `Text me bby`,
  };
};

export { AffineOriginalPathPromptText, AffineOriginalPathPromptEditor };
