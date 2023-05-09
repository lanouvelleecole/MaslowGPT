import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const affine_subfolder = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    // Variable name for this input
    name: "affine_subfolder",

    default: (data) => {
      return getDataFromNPMMaslowJSON("affine_subfolder") ?? "src";
    },

    //editable: true,
    //suggestOnly: false,

    // Prompt to display on command line
    message: `
${I18n.t("xGOWqsXp")} ${appRootPath}`,
  };
};

export { affine_subfolder };
