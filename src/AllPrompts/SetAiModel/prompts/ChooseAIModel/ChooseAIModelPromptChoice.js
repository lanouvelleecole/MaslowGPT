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

export const ChooseAIModelChoices = {
  ChooseAIModelChoice1: ``,
  ChooseAIModelChoice2: ``,
  ChooseAIModelChoice3: ``,
};

export const ChooseAIModelPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAIModel",
    message: I18n.t("xaCIid0a"),

    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003";
    },

    choices: Constants.allModels,
  };
};

export const ChooseAIModelPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAIModel",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAIModel") ??
        ChooseAIModelChoices.ChooseAIModelChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineChooseAIModel);

      return subfolders ?? ["<"];
    },
  };
};

export const ChooseAIModelPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAIModel",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAIModel") ??
        ChooseAIModelChoices.ChooseAIModelChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const ChooseAIModelPromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAIModel",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAIModel") ??
        ChooseAIModelChoices.ChooseAIModelChoice1
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
        answers.AffineChooseAIModel
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const ChooseAIModelPromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseAIModel",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseAIModel") ??
        ChooseAIModelChoices.ChooseAIModelChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
