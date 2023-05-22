import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const AffineAffineDeletePathPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineAffineDeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineAffineDeletePath");
    },

    message: `Text me bby`,
  };
};

const AffineAffineDeletePathPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AffineAffineDeletePath",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AffineAffineDeletePath");
    },

    message: `Text me bby`,
  };
};

export { AffineAffineDeletePathPromptText, AffineAffineDeletePathPromptEditor };
