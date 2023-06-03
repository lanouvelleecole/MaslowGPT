/* PLOP_IMPORT_SortArrayByLength */
import { SortArrayByLength } from "../../../../services/SortArrayByLength/SortArrayByLength.js";
/* PLOP_IMPORT_SortArrayByLength */
/* PLOP_IMPORT_RemoveDuplicatesFromArray */
import { RemoveDuplicatesFromArray } from "../../../../services/RemoveDuplicatesFromArray/RemoveDuplicatesFromArray.js";
/* PLOP_IMPORT_RemoveDuplicatesFromArray */

import { GetSubfolders } from "./GetSubfolders.js";
/* eslint-disable no-debugger */

import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

import { GetSubfiles } from "./GetSubfiles.js";
import { answers } from "../../../../../index.js";
import { Constants } from "../../../../AppConstants/Constants.js";
import { GetTaggedSubfiles } from "./GetTaggedSubfiles.js";

export const AppNameChoices = {
  AppNameChoice1: ``,
  AppNameChoice2: ``,
  AppNameChoice3: ``,
};

export const AppNamePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AppName",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AppName") ??
        AppNameChoices.AppNameChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AppNameChoices.AppNameChoice1,
      AppNameChoices.AppNameChoice2,
      AppNameChoices.AppNameChoice3,
    ],
  };
};

export const AppNamePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AppName",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AppName") ??
        AppNameChoices.AppNameChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineAppName);

      return subfolders ?? ["<"];
    },
  };
};

export const AppNamePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AppName",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AppName") ??
        AppNameChoices.AppNameChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const AppNamePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "AppName",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AppName") ??
        AppNameChoices.AppNameChoice1
      );
    },

    choices: (data) => {
      const subfilesNSubfolders = [
        ...GetSubfiles(appRootPath),
        ...GetSubfolders(appRootPath),
      ];

      subfilesNSubfolders?.unshift(
        "<",
        Constants.noChoice,
        answers.AffineAppName
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const AppNamePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AppName",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AppName") ??
        AppNameChoices.AppNameChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
