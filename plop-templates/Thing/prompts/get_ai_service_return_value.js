import { answers } from "../../../index.js";
import { userChoices } from "./askWhatUserWants.js";
import { getDataFromMaslowJSONObj } from "./getDataFromMaslowJSONObj.js";

const get_ai_service_return_value = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "get_ai_service_return_value",
    default: (data) => {
      return (
        getDataFromMaslowJSONObj(
          answers,
          "get_ai_service_return_value",
          appRootPath
        ) ?? "Retourne un nombre, x et y additionnés ensemble"
      );
    },
    editable: true,
    force: true,
    suggestOnly: false,
    message: (data) => `
*******************************************************
*
* Décris en détail ce que cette fonction doit faire. Le but que cette fonction doit accomplir.
* Si cette fonction doit retourner une valeur, un component, null, 42, "Tizi Ouzou", etc..., 
* et/ou exécuter des callbacks, une requête HTTP, un truc ou un machin, et j'en passe, etc...,
* C'est ici que tu décris tout ceci.
* RAPPEL: La fonction consomme ceci: ${answers.get_ai_service_args}.
*
*******************************************************`,
    when: (data) => answers.what_we_wanna_do === userChoices.createAIService,
  };
};

export { get_ai_service_return_value };
