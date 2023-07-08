import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const SDKMethodNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "SDKMethodName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("SDKMethodName");
    },

    message: I18n.t("xPsmlKYc"),
  };
};

const SDKMethodNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "SDKMethodName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("SDKMethodName");
    },

    message: `Text me bby`,
  };
};

export { SDKMethodNamePromptText, SDKMethodNamePromptEditor };
