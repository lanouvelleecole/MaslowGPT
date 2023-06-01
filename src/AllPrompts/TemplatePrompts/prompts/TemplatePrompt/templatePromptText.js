import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const templatePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "<prompt_name>",
    default: (data) => {
      return getDataFromNPMMaslowJSON("<prompt_name>");
    },

    message: ``,
  };
};

const templatePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "<prompt_name>",
    default: (data) => {
      return getDataFromNPMMaslowJSON("<prompt_name>");
    },

    message: ``,
  };
};

export { templatePromptText, templatePromptEditor };
