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

export const DeletePathChoices = {
  DeletePathChoice1: ``,
  DeletePathChoice2: ``,
  DeletePathChoice3: ``,
};

export const DeletePathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "DeletePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DeletePath") ??
        DeletePathChoices.DeletePathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      DeletePathChoices.DeletePathChoice1,
      DeletePathChoices.DeletePathChoice2,
      DeletePathChoices.DeletePathChoice3,
    ],
  };
};

export const DeletePathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "DeletePath",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DeletePath") ??
        DeletePathChoices.DeletePathChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineDeletePath);

      return subfolders ?? ["<"];
    },
  };
};

export const DeletePathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "DeletePath",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DeletePath") ??
        DeletePathChoices.DeletePathChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const DeletePathPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "DeletePath",
    message: I18n.t('xYOGfJDb'),

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DeletePath") ??
        DeletePathChoices.DeletePathChoice1
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
        answers.AffineDeletePath
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const DeletePathPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "DeletePath",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DeletePath") ??
        DeletePathChoices.DeletePathChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
