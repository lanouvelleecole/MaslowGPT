import I18n from "i18n-js";
import { second_cmd_arg } from "../../../index.js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const affine_file_where_we_use_string = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    when: (data) => {
      return second_cmd_arg == null;
    },

    // Variable name for this input
    name: "affine_file_where_we_use_string",

    // Prompt to display on command line
    message: `${I18n.t("xcFMYkUC")} ${appRootPath}`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("affine_file_where_we_use_string") ?? "src"
      );
    },
  };
};

export { affine_file_where_we_use_string };
