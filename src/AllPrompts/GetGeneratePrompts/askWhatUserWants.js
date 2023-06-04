/* eslint-disable no-debugger */
import I18n from "i18n-js";

import path from "path";
import { answers } from "../../../index.js";
import { getAllFoldersFromFolder } from "../../services/GetAllFoldersFromFolder/getAllFoldersFromFolder.js";
import { readFilesRecursively } from "../../services/GetAllFilesFromPath/getAllFilesFromPath.js";
import { Constants } from "../../AppConstants/Constants.js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { AppStrings } from "../../AppStrings/AppStrings.js";

AppStrings();

const userChoices = {
  createComponent: I18n.t("xcyv29p"),
  createPage: I18n.t("xDlFMoEz"),
  createSubpage: I18n.t("xCaIs0jy"),
  createAIService: I18n.t("xGzPo0pj"),
  createService: I18n.t("x1a2jf2d"),
  createStringRepo: I18n.t("x6W6CXdo"),
  addStringToRepo: I18n.t("xbfJ42tQ"),
  createAppTemplate: I18n.t("xxUmfKij"),
  createReduxState: I18n.t("xOarFNkY"),
  createHTDPTemplate: I18n.t("xExsVaBf"),
  createQuestionnaire: I18n.t("x47TFTW7"),
  createSingleton: I18n.t("xJjkcv"),
  createDoWork: I18n.t("xkE7uMjm"),
  createWorkHTTP: I18n.t("xpMyfHf"),
  actionTemporaire: I18n.t("xMEGdn96"),
};

const what_we_wanna_do = (appRootPath) => {
  return {
    type: "list",
    name: "what_we_wanna_do",
    message: I18n.t("xIJLLYu8"),

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("what_we_wanna_do") ??
        userChoices.createAIService
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      userChoices.createAIService, // GEN OK
      userChoices.createPage, // GEN OK
      userChoices.createSubpage, // GEN OK
      userChoices.createService, // GEN OK
      userChoices.createStringRepo,
      userChoices.createReduxState,
      userChoices.createHTDPTemplate,
      userChoices.createSingleton,
      userChoices.createDoWork,
      userChoices.createWorkHTTP,

      // ze cimeuterry
      //userChoices.actionTemporaire,
      //userChoices.createComponent,
      //userChoices.createQuestionnaire,
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

const ask_for_subfolder = (appRootPath) => {
  return {
    type: "list",
    name: "ask_for_subfolder",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ask_for_subfolder") ?? "src/services";
    },
    message: ` 
${I18n.t("x5uWGLCn")} ${appRootPath}`,
    choices: (data) => {
      const approx_folder = answers.affine_subfolder;

      const search_path = path.join(appRootPath, approx_folder);

      let subfolders_inside_src = getAllFoldersFromFolder(search_path).map(
        (folderPath) => path.join(approx_folder, folderPath)
      );

      subfolders_inside_src = subfolders_inside_src.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });

      subfolders_inside_src.unshift(approx_folder, "<");

      return subfolders_inside_src;
    },
  };
};

const ask_for_js_file = (appRootPath) => {
  return {
    type: "list",
    name: "ask_for_js_file",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ask_for_js_file") ?? "App.js";
    },
    when: (data) => {
      const blacklist = Constants.ask_for_js_file_blacklist();
      const what_we_wanna_do = answers.what_we_wanna_do;

      return !blacklist.includes(what_we_wanna_do);
    },
    message: `
${I18n.t("x7pVQxGu")}${appRootPath}
`,
    choices: (data) => {
      const affine_file_where_we_use = answers.affine_file_where_we_use;
      const search_path = path.join(appRootPath, affine_file_where_we_use);

      const all_src_files_from_path = readFilesRecursively(
        search_path,
        Constants.exts,
        Constants.ignoreList
      )
        ?.map((filePath) => {
          return path.join(affine_file_where_we_use, filePath);
        })
        ?.filter((path) => {
          return !path.endsWith(".hbs");
        });

      all_src_files_from_path?.unshift(Constants.noChoice, "<");

      return all_src_files_from_path?.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });
    },
  };
};

export { what_we_wanna_do };
export { userChoices };
export { getProperFolderName };
export { ask_for_subfolder };
export { getProperFolderPath };
export { ask_for_js_file };
export { getProperExtension };
