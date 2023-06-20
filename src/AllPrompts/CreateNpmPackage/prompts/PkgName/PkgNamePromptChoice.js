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

export const PkgNameChoices = {
  PkgNameChoice1: ``,
  PkgNameChoice2: ``,
  PkgNameChoice3: ``,
};

export const PkgNamePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "PkgName",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("PkgName") ??
        PkgNameChoices.PkgNameChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      PkgNameChoices.PkgNameChoice1,
      PkgNameChoices.PkgNameChoice2,
      PkgNameChoices.PkgNameChoice3,
    ],
  };
};

export const PkgNamePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "PkgName",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("PkgName") ??
        PkgNameChoices.PkgNameChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffinePkgName);

      return subfolders ?? ["<"];
    },
  };
};

export const PkgNamePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "PkgName",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("PkgName") ??
        PkgNameChoices.PkgNameChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const PkgNamePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "PkgName",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("PkgName") ??
        PkgNameChoices.PkgNameChoice1
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
        answers.AffinePkgName
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const PkgNamePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "PkgName",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("PkgName") ??
        PkgNameChoices.PkgNameChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
