import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const OriginalPathPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "OriginalPath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("OriginalPath");
    },

    message: `Text me bby`,
  };
};

const OriginalPathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "OriginalPath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("OriginalPath");
    },

    message: `Text me bby`,
  };
};

export { OriginalPathPromptText, OriginalPathPromptEditor };
