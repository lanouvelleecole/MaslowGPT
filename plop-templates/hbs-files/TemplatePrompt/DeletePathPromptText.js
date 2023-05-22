import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const DeletePathPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "DeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("DeletePath");
    },

    message: `Text me bby`,
  };
};

const DeletePathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "DeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("DeletePath");
    },

    message: `Text me bby`,
  };
};

export { DeletePathPromptText, DeletePathPromptEditor };
