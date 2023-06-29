import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const EndpointNamePromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "EndpointName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("EndpointName");
    },

    message: I18n.t('xFAbSgwG'),
  };
};

const EndpointNamePromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "EndpointName",
    default: (data) => {
      return getDataFromNPMMaslowJSON("EndpointName");
    },

    message: `Text me bby`,
  };
};

export { EndpointNamePromptText, EndpointNamePromptEditor };
