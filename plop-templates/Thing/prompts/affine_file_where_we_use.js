import { getDataFromNPMMaslowJSON } from "./getDataFromNPMMaslowJSONObj.js";
import { answers } from "../../../index.js";

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
******************************************************
*
* Partant du dossier ${appRootPath}, 
* écris le path APPROXIMATIF du dossier contenant le fichier dans lequel tu souhaites utiliser cet élément. (L'étape suivante te proposera une liste de fichiers situé dans l'approximation fournie, cette étape intermédiaire est nécessaire,
* pour que la liste de choix ne soit pas trop longue ;-).
*
*******************************************************`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON(answers, "affine_file_where_we_use") ?? "src"
      );
    },

    editable: true,
    force: true,
    suggestOnly: false,
  };
};

export { affine_file_where_we_use };
