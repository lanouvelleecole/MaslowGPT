import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AddCommandNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandName",

    message: I18n.t("xpqAUrx"),
  };
};

const AddCommandNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AddCommandName");
    },

    message: ``,
  };
};

export { AddCommandNamePromptText, AddCommandNamePromptEditor };
