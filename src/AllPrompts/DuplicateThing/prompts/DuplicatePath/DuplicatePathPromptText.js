import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const DuplicatePathPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "DuplicatePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("DuplicatePath");
    },

    message: I18n.t("xWl6y3p9") + ` ${appRootPath}`,
  };
};

const DuplicatePathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "DuplicatePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("DuplicatePath");
    },

    message: `Text me bby`,
  };
};

export { DuplicatePathPromptText, DuplicatePathPromptEditor };
