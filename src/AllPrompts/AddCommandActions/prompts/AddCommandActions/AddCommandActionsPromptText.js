import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AddCommandActionsPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandActions",
    default: (data) => {
      return null;
    },

    message: I18n.t("xolCVXrV"),
  };
};

const AddCommandActionsPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandActions",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AddCommandActions");
    },

    message: ``,
  };
};

export { AddCommandActionsPromptText, AddCommandActionsPromptEditor };
