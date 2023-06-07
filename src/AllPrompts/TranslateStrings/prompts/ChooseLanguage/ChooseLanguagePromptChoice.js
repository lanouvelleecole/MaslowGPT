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
import { ReadJSONFile } from "../../../../services/ReadJSONFile/ReadJSONFile.js";
import { GetAllLanguagesPath } from "../../../../AllGenerators/SetTranslateStringsAsyncActions/TranslateSrc/pieces/GetAllLanguagesPath/GetAllLanguagesPath.js";

export const ChooseLanguageChoices = {
  ChooseLanguageChoice1: ``,
  ChooseLanguageChoice2: ``,
  ChooseLanguageChoice3: ``,
};

export const ChooseLanguagePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseLanguage",
    message: I18n.t("xSQ5Oiki"),

    default: (data) => {
      return getDataFromNPMMaslowJSON("ChooseLanguage");
    },

    choices: (data) => {
      const allLanguagesPath = GetAllLanguagesPath();
      const AllLanguagesJSON = ReadJSONFile(allLanguagesPath);

      return AllLanguagesJSON;
    },
  };
};

export const ChooseLanguagePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseLanguage",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseLanguage") ??
        ChooseLanguageChoices.ChooseLanguageChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineChooseLanguage);

      return subfolders ?? ["<"];
    },
  };
};

export const ChooseLanguagePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseLanguage",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseLanguage") ??
        ChooseLanguageChoices.ChooseLanguageChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const ChooseLanguagePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseLanguage",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseLanguage") ??
        ChooseLanguageChoices.ChooseLanguageChoice1
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
        answers.AffineChooseLanguage
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const ChooseLanguagePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "ChooseLanguage",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("ChooseLanguage") ??
        ChooseLanguageChoices.ChooseLanguageChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
