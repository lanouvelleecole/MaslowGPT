import { answers } from "../../../index.js";
import { getDataFromNPMMaslowJSON } from "./getDataFromNPMMaslowJSONObj.js";

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

      return getDataFromNPMMaslowJSON(answers, "name") ?? "TestUtil";
    },

    message: `
***************************************
*                                     *
* Quel est le nom de cet élément ?    *
*                                     *
***************************************
`,
  };
};

export { askForThingName };
