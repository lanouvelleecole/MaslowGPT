import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const ChooseAIModelPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseAIModel",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseAIModel");
    },

    message: `Text me bby`,
  };
};

const ChooseAIModelPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "ChooseAIModel",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseAIModel");
    },

    message: `Text me bby`,
  };
};

export { ChooseAIModelPromptText, ChooseAIModelPromptEditor };
