import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AddCommandPromptsPromptText = (appRootPath) => {
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

    message: I18n.t(`xy9q3K36`),
  };
};

const AddCommandPromptsPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AddCommandPrompts",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AddCommandPrompts");
    },

    message: ``,
  };
};

export { AddCommandPromptsPromptText, AddCommandPromptsPromptEditor };
