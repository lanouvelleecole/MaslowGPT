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

export const EndpointNameChoices = {
  EndpointNameChoice1: ``,
  EndpointNameChoice2: ``,
  EndpointNameChoice3: ``,
};

export const EndpointNamePromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "EndpointName",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("EndpointName") ??
        EndpointNameChoices.EndpointNameChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      EndpointNameChoices.EndpointNameChoice1,
      EndpointNameChoices.EndpointNameChoice2,
      EndpointNameChoices.EndpointNameChoice3,
    ],
  };
};

export const EndpointNamePromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "EndpointName",
    message: `Folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("EndpointName") ??
        EndpointNameChoices.EndpointNameChoice1
      );
    },

    choices: (data) => {
      const subfolders = GetSubfolders(appRootPath);

      subfolders?.unshift("<", answers.AffineEndpointName);

      return subfolders ?? ["<"];
    },
  };
};

export const EndpointNamePromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "EndpointName",
    message: `Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("EndpointName") ??
        EndpointNameChoices.EndpointNameChoice1
      );
    },

    choices: (data) => {
      const subfiles = GetSubfiles(appRootPath);

      subfiles?.unshift("<", Constants.noChoice);

      return subfiles ?? ["<"];
    },
  };
};

export const EndpointNamePromptChoicesAll = (appRootPath) => {
  return {
    type: "list",
    name: "EndpointName",
    message: `Files and folders bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("EndpointName") ??
        EndpointNameChoices.EndpointNameChoice1
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
        answers.AffineEndpointName
      );

      return SortArrayByLength(RemoveDuplicatesFromArray(subfilesNSubfolders));
    },
  };
};

export const EndpointNamePromptChoicesTaggedFiles = (appRootPath) => {
  return {
    type: "list",
    name: "EndpointName",
    message: `Tagged Files bby`,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("EndpointName") ??
        EndpointNameChoices.EndpointNameChoice1
      );
    },

    choices: (data) => {
      const tagged_subfiles = GetTaggedSubfiles(appRootPath);

      tagged_subfiles?.unshift("<", Constants.noChoice);

      return tagged_subfiles ?? ["<"];
    },
  };
};
