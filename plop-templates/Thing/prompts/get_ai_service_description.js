import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";
import { getDataFromMaslowJSONObj } from "./getDataFromMaslowJSONObj.js";

const get_ai_service_description = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "get_ai_service_description",
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "get_ai_service_description",
          appRootPath
        ) ?? "Additionne x et y"
      );
    },
    editable: true,
    force: true,
    suggestOnly: false,
    message: (data) => `
*******************************************************
*
* Décris SIMPLEMENT ce que fait, à quoi sert cette fonction.
* RAPPEL: La fonction consomme ceci: ${answers.get_ai_service_args}.
* NOTE: Ne soit pas trop détaillé, 1 ou 2 phrases maxi suffisent, 
* la description détaillé vient à l'étape suivante.
*
*******************************************************`,
    when: (data) => answers.what_we_wanna_do === userChoices.createAIService,
  };
};

export { get_ai_service_description };
