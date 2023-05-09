import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

/**
 *
 *
 * (affine_string_repo)
 *
 */
const affine_string_repo = {
  type: "input",

  editable: true,

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  default: (data) => {
    //console.log(`answers: ${JSON.stringify(answers)}`);

    return getDataFromNPMMaslowJSON("affine_string_repo") ?? "src";
  },

  // Variable name for this input
  name: "affine_string_repo",

  // Prompt to display on command line
  message: I18n.t("xA61w42b"),
};

export { affine_string_repo };
