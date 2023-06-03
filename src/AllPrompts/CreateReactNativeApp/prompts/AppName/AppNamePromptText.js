import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AppNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AppName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AppName");
    },

    message: `Text me bby`,
  };
};

const AppNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AppName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AppName");
    },

    message: `Text me bby`,
  };
};

export { AppNamePromptText, AppNamePromptEditor };
