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

export const AffineAffineDeletePathChoices = {
  AffineAffineDeletePathChoice1: ``,
  AffineAffineDeletePathChoice2: ``,
  AffineAffineDeletePathChoice3: ``,
};

export const AffineAffineDeletePathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAffineDeletePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAffineDeletePath") ??
        AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1,
      AffineAffineDeletePathChoices.AffineAffineDeletePathChoice2,
      AffineAffineDeletePathChoices.AffineAffineDeletePathChoice3,
    ],
  };
};

export const AffineAffineDeletePathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAffineDeletePath",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAffineDeletePath") ??
        AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineAffineAffineDeletePath);

      return subfolders ?? ["<"];
    },
  };
};

export const AffineAffineDeletePathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAffineDeletePath",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAffineDeletePath") ??
        AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const AffineAffineDeletePathPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAffineDeletePath",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAffineDeletePath") ??
        AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1
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
        answers.AffineAffineAffineDeletePath
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const AffineAffineDeletePathPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAffineDeletePath",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAffineDeletePath") ??
        AffineAffineDeletePathChoices.AffineAffineDeletePathChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
