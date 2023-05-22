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

export const DuplicatePathChoices = {
  DuplicatePathChoice1: ``,
  DuplicatePathChoice2: ``,
  DuplicatePathChoice3: ``,
};

export const DuplicatePathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "DuplicatePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DuplicatePath") ??
        DuplicatePathChoices.DuplicatePathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      DuplicatePathChoices.DuplicatePathChoice1,
      DuplicatePathChoices.DuplicatePathChoice2,
      DuplicatePathChoices.DuplicatePathChoice3,
    ],
  };
};

export const DuplicatePathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "DuplicatePath",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DuplicatePath") ??
        DuplicatePathChoices.DuplicatePathChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineDuplicatePath);

      return subfolders ?? ["<"];
    },
  };
};

export const DuplicatePathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "DuplicatePath",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DuplicatePath") ??
        DuplicatePathChoices.DuplicatePathChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const DuplicatePathPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "DuplicatePath",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DuplicatePath") ??
        DuplicatePathChoices.DuplicatePathChoice1
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
        answers.AffineDuplicatePath
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const DuplicatePathPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "DuplicatePath",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("DuplicatePath") ??
        DuplicatePathChoices.DuplicatePathChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
