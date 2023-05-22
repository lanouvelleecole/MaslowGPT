import I18n from "i18n-js";
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

export const OriginalPathChoices = {
  OriginalPathChoice1: ``,
  OriginalPathChoice2: ``,
  OriginalPathChoice3: ``,
};

export const OriginalPathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "OriginalPath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("OriginalPath") ??
        OriginalPathChoices.OriginalPathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      OriginalPathChoices.OriginalPathChoice1,
      OriginalPathChoices.OriginalPathChoice2,
      OriginalPathChoices.OriginalPathChoice3,
    ],
  };
};

export const OriginalPathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "OriginalPath",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("OriginalPath") ??
        OriginalPathChoices.OriginalPathChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineOriginalPath);

      return subfolders ?? ["<"];
    },
  };
};

export const OriginalPathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "OriginalPath",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("OriginalPath") ??
        OriginalPathChoices.OriginalPathChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const OriginalPathPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "OriginalPath",
    message: I18n.t("x9KJS4eg"),

    default: (data) => {
      return getDataFromNPMMaslowJSON("OriginalPath");
    },

    choices: (data) => {
      const subfilesNSubfolders = [
        ...GetSubfiles(appRootPath),
        ...GetSubfolders(appRootPath),
      ];

      subfilesNSubfolders?.unshift(
        "<",
        Constants.noChoice,
        answers.AffineOriginalPath
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const OriginalPathPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "OriginalPath",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("OriginalPath") ??
        OriginalPathChoices.OriginalPathChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
