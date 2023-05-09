import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

const askForThingName = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "name",
    default: (data) => {
      //console.log(`answers: ${JSON.stringify(answers)}`);

      return getDataFromNPMMaslowJSON("name") ?? "TestUtil";
    },

    message: I18n.t("xjbmERwe"),
  };
};

export { askForThingName };
