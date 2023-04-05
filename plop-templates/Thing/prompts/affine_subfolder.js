import { answers } from "../../../index.js";
import { getDataFromNPMMaslowJSON } from "./getDataFromNPMMaslowJSONObj.js";

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
      return getDataFromNPMMaslowJSON(answers, "affine_subfolder") ?? "src";
    },

    //editable: true,
    //suggestOnly: false,

    // Prompt to display on command line
    message: `
***********************************************************************************************
*                                     
*
* Partant du dossier ${appRootPath}, écris le path APPROXIMATIF du dossier 
* dans lequel tu souhaites créer cet élément. 
* (L'étape suivante te proposera une liste de dossiers 
* situé dans l'approximation fournie, pour que la liste de choix ne soit pas trop longue ;-).
*
***********************************************************************************************`,
  };
};

export { affine_subfolder };
