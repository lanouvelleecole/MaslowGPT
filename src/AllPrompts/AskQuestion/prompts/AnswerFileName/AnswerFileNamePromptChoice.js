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

export const AnswerFileNameChoices = {
  AnswerFileNameChoice1: ``,
  AnswerFileNameChoice2: ``,
  AnswerFileNameChoice3: ``,
};

export const AnswerFileNamePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AnswerFileName",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AnswerFileName") ??
        AnswerFileNameChoices.AnswerFileNameChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AnswerFileNameChoices.AnswerFileNameChoice1,
      AnswerFileNameChoices.AnswerFileNameChoice2,
      AnswerFileNameChoices.AnswerFileNameChoice3,
    ],
  };
};

export const AnswerFileNamePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AnswerFileName",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AnswerFileName") ??
        AnswerFileNameChoices.AnswerFileNameChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineAnswerFileName);

      return subfolders ?? ["<"];
    },
  };
};

export const AnswerFileNamePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AnswerFileName",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AnswerFileName") ??
        AnswerFileNameChoices.AnswerFileNameChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const AnswerFileNamePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "AnswerFileName",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AnswerFileName") ??
        AnswerFileNameChoices.AnswerFileNameChoice1
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
        answers.AffineAnswerFileName
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const AnswerFileNamePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AnswerFileName",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AnswerFileName") ??
        AnswerFileNameChoices.AnswerFileNameChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
