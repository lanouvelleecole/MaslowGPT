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

export const AffineAppStringsChoices = {
  AffineAppStringsChoice1: ``,
  AffineAppStringsChoice2: ``,
  AffineAppStringsChoice3: ``,
};

export const AffineAppStringsPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAppStrings",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAppStrings") ??
        AffineAppStringsChoices.AffineAppStringsChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AffineAppStringsChoices.AffineAppStringsChoice1,
      AffineAppStringsChoices.AffineAppStringsChoice2,
      AffineAppStringsChoices.AffineAppStringsChoice3,
    ],
  };
};

export const AffineAppStringsPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAppStrings",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAppStrings") ??
        AffineAppStringsChoices.AffineAppStringsChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineAffineAppStrings);

      return subfolders ?? ["<"];
    },
  };
};

export const AffineAppStringsPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAppStrings",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAppStrings") ??
        AffineAppStringsChoices.AffineAppStringsChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const AffineAppStringsPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAppStrings",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAppStrings") ??
        AffineAppStringsChoices.AffineAppStringsChoice1
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
        answers.AffineAffineAppStrings
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const AffineAppStringsPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineAppStrings",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineAppStrings") ??
        AffineAppStringsChoices.AffineAppStringsChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
