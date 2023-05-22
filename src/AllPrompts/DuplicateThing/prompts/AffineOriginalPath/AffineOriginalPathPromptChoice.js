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

export const AffineOriginalPathChoices = {
  AffineOriginalPathChoice1: ``,
  AffineOriginalPathChoice2: ``,
  AffineOriginalPathChoice3: ``,
};

export const AffineOriginalPathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AffineOriginalPath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineOriginalPath") ??
        AffineOriginalPathChoices.AffineOriginalPathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AffineOriginalPathChoices.AffineOriginalPathChoice1,
      AffineOriginalPathChoices.AffineOriginalPathChoice2,
      AffineOriginalPathChoices.AffineOriginalPathChoice3,
    ],
  };
};

export const AffineOriginalPathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AffineOriginalPath",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineOriginalPath") ??
        AffineOriginalPathChoices.AffineOriginalPathChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineAffineOriginalPath);

      return subfolders ?? ["<"];
    },
  };
};

export const AffineOriginalPathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineOriginalPath",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineOriginalPath") ??
        AffineOriginalPathChoices.AffineOriginalPathChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const AffineOriginalPathPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "AffineOriginalPath",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineOriginalPath") ??
        AffineOriginalPathChoices.AffineOriginalPathChoice1
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
        answers.AffineAffineOriginalPath
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const AffineOriginalPathPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineOriginalPath",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineOriginalPath") ??
        AffineOriginalPathChoices.AffineOriginalPathChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
