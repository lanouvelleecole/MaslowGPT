import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { Constants } from "../../AppConstants/Constants.js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const affine_file_where_we_use = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    // Variable name for this input
    name: "affine_file_where_we_use",

    // Prompt to display on command line
    message: `
${I18n.t("xzY8qWWH")} ${appRootPath}`,

    default: (data) => {
      return getDataFromNPMMaslowJSON("affine_file_where_we_use") ?? "src";
    },

    when: (data) => {
      const blacklist = Constants.ask_for_js_file_blacklist();
      const what_we_wanna_do = answers.what_we_wanna_do;

      return !blacklist.includes(what_we_wanna_do);
    },
  };
};

export { affine_file_where_we_use };
