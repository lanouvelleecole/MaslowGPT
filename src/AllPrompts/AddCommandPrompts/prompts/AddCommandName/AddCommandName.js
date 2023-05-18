import I18n from "i18n-js";

import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AddCommandNameText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AddCommandName");
    },

    message: I18n.t("x04nYSfC"),
  };
};

const AddCommandPromptsText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandPrompts",
    default: (data) => {
      return null;
    },

    message: I18n.t("xy9q3K36"),
  };
};

const AddCommandActionsText = (appRootPath) => {
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

const AddCommandNameEditor = (appRootPath) => {
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

export {
  AddCommandNameText,
  AddCommandNameEditor,
  AddCommandPromptsText,
  AddCommandActionsText,
};
