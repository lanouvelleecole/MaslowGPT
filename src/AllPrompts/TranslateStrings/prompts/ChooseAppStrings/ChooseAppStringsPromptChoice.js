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
import I18n from "i18n-js";

export const ChooseAppStringsChoices = {
  ChooseAppStringsChoice1: ``,
  ChooseAppStringsChoice2: ``,
  ChooseAppStringsChoice3: ``,
};

export const ChooseAppStringsPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAppStrings",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAppStrings") ??
        ChooseAppStringsChoices.ChooseAppStringsChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      ChooseAppStringsChoices.ChooseAppStringsChoice1,
      ChooseAppStringsChoices.ChooseAppStringsChoice2,
      ChooseAppStringsChoices.ChooseAppStringsChoice3,
    ],
  };
};

export const ChooseAppStringsPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAppStrings",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAppStrings") ??
        ChooseAppStringsChoices.ChooseAppStringsChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineChooseAppStrings);

      return subfolders ?? ["<"];
    },
  };
};

export const ChooseAppStringsPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAppStrings",
    message: I18n.t("x6zDMY6l"),

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAppStrings") ??
        ChooseAppStringsChoices.ChooseAppStringsChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const ChooseAppStringsPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAppStrings",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAppStrings") ??
        ChooseAppStringsChoices.ChooseAppStringsChoice1
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
        answers.AffineChooseAppStrings
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const ChooseAppStringsPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAppStrings",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAppStrings") ??
        ChooseAppStringsChoices.ChooseAppStringsChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
