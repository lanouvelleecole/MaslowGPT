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

export const SDKMethodNameChoices = {
  SDKMethodNameChoice1: ``,
  SDKMethodNameChoice2: ``,
  SDKMethodNameChoice3: ``,
};

export const SDKMethodNamePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "SDKMethodName",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("SDKMethodName") ??
        SDKMethodNameChoices.SDKMethodNameChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      SDKMethodNameChoices.SDKMethodNameChoice1,
      SDKMethodNameChoices.SDKMethodNameChoice2,
      SDKMethodNameChoices.SDKMethodNameChoice3,
    ],
  };
};

export const SDKMethodNamePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "SDKMethodName",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("SDKMethodName") ??
        SDKMethodNameChoices.SDKMethodNameChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineSDKMethodName);

      return subfolders ?? ["<"];
    },
  };
};

export const SDKMethodNamePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "SDKMethodName",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("SDKMethodName") ??
        SDKMethodNameChoices.SDKMethodNameChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const SDKMethodNamePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "SDKMethodName",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("SDKMethodName") ??
        SDKMethodNameChoices.SDKMethodNameChoice1
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
        answers.AffineSDKMethodName
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const SDKMethodNamePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "SDKMethodName",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("SDKMethodName") ??
        SDKMethodNameChoices.SDKMethodNameChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
