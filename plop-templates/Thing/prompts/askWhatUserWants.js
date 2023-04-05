import path from "path";
import { answers } from "../../../index.js";
import { getAllFoldersFromFolder } from "../actions/getAllFoldersFromFolder.js";
import { getPathWithForwardSlashes } from "../actions/getPathWithForwardSlashes.js";
import { Constants } from "../AddQuestion/pieces/Constants.js";
import { getAllFilesFromPath } from "../AddQuestion/pieces/getAllFilesFromPath.js";
import { getDataFromNPMMaslowJSON } from "./getDataFromNPMMaslowJSONObj.js";

const userChoices = {
  // AJOUTE_TEMPLATE //
  createComponent: "Crée un component",
  createPage: "Crée une page.",
  createSubpage: "Crée une sous page",
  createAIService:
    "Crée une fonction dans un language de programmation spécifique (via Chat GPT, l'I.A. magique)",
  createService: "Crée une fonction React Native/un component React Native.",
  createStringRepo: "Crée un répertoire de strings internationaux.",
  addStringToRepo: "Ajoute un string international dans le répertoire.",
  createAppTemplate:
    "Crée un template de App.js avec style et component distincts.",
  createReduxState: "Crée un state global (avec Redux)",
  createHTDPTemplate: "Crée un state (avec useState)",
  createQuestionnaire: "Crée un questionnaire",
  createSingleton: "Crée un singleton",
  createDoWork: "Crée une liste de boulot vide",
  createWorkHTTP: "Crée un boulot individuel (par défaut une requête HTTP)",
  actionTemporaire:
    "Un ptit script sauveur de temps à exécuter ? C ici ke sa se passe.",
};

const askWhatUserWants = (appRootPath) => {
  return {
    type: "list",
    name: "what_we_wanna_do",
    message: `
*******************************
*                             *
* Que souhaites-tu faire ?    *
*                             *
*******************************
`,
    default: (data) => {
      return (
        getDataFromNPMMaslowJSON(answers, "what_we_wanna_do") ??
        userChoices.createAIService
      );
    },
    choices: [
      // AJOUTE_TEMPLATE //
      userChoices.createComponent,
      userChoices.createPage,
      userChoices.createSubpage,
      userChoices.createAIService,
      userChoices.createService,
      userChoices.createStringRepo,
      userChoices.createReduxState,
      userChoices.createHTDPTemplate,
      userChoices.createQuestionnaire,
      userChoices.createSingleton,
      userChoices.createDoWork,
      userChoices.createWorkHTTP,
      userChoices.actionTemporaire,
    ],
  };
};

function getProperFolderName(whatThing) {
  if (whatThing == userChoices.createComponent) {
    return "components";
  }
  // AJOUTE_TEMPLATE //
  else if (whatThing == userChoices.createPage) {
    return "pages";
  } else if (whatThing == userChoices.createSubpage) {
    return "pages";
  } else if (whatThing == userChoices.createQuestionnaire) {
    return "questions";
  } else if (whatThing == userChoices.createService) {
    return "services";
  } else if (whatThing == userChoices.createStringRepo) {
    return "stringRepos";
  } else if (whatThing == userChoices.createReduxState) {
    return "reduxState";
  } else {
    return;
  }
}

function getProperFolderPath(subfolder, whatThing) {
  const properFolderName = getProperFolderName(whatThing);

  if (subfolder != null && subfolder.length > 0) {
    return subfolder;
  } else {
    return properFolderName;
  }
}

function getProperExtension(whatThing) {
  return "js";
}

const askForSubfolder = (appRootPath) => {
  return {
    type: "list",
    name: "ask_for_subfolder",
    default: (data) => {
      return (
        getDataFromNPMMaslowJSON(answers, "ask_for_subfolder") ?? "src/services"
      );
    },
    message: `
*********************************************************************
*
* Partant du dossier ${appRootPath}, 
* dans quel dossier veux tu créer cet élément ?
*
*********************************************************************`,
    choices: (data) => {
      const approx_folder = answers.affine_subfolder;

      const search_path = path.join(appRootPath, approx_folder);

      let subfolders_inside_src = getAllFoldersFromFolder(search_path).map(
        (folderPath) => path.join(approx_folder, folderPath)
      );

      subfolders_inside_src = subfolders_inside_src.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });

      subfolders_inside_src.unshift("<", approx_folder);

      return subfolders_inside_src;
    },
  };
};

const getFileWhereWeUse = (appRootPath) => {
  return {
    type: "list",
    name: "ask_for_js_file",
    default: (data) => {
      return getDataFromNPMMaslowJSON(answers, "ask_for_js_file") ?? "App.js";
    },

    message: `
*************************************************************
*
* Partant du dossier ${appRootPath}, dans quel fichier veux tu utiliser cet élément ?
*
**************************************************************`,
    choices: (data) => {
      const affine_file_where_we_use = answers.affine_file_where_we_use;
      const search_path = path.join(appRootPath, affine_file_where_we_use);

      const all_src_files_from_path = getAllFilesFromPath(search_path)
        ?.map((filePath) => {
          return path.join(affine_file_where_we_use, filePath);
        })
        ?.filter((path) => {
          return !path.endsWith(".hbs");
        });

      all_src_files_from_path?.unshift("<", Constants.noChoice);

      return all_src_files_from_path?.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });
    },
  };
};

export { askWhatUserWants };
export { userChoices };
export { getProperFolderName };
export { askForSubfolder };
export { getProperFolderPath };
export { getFileWhereWeUse };
export { getProperExtension };
