/* eslint-disable no-debugger */

import { answers } from "../../../../../index.js";

import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

import path from "path";
import { getAllFoldersFromFolder } from "../../../../services/GetAllFoldersFromFolder/getAllFoldersFromFolder.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { Constants } from "../../../../AppConstants/Constants.js";
import { readFilesRecursively } from "../../../../services/GetAllFilesFromPath/getAllFilesFromPath.js";

export const AffineDeletePathChoices = {
  AffineDeletePathChoice1: ``,
  AffineDeletePathChoice2: ``,
  AffineDeletePathChoice3: ``,
};

export const AffineDeletePathPromptChoices = (appRootPath) => {
  return {
    type: "list",
    name: "AffineDeletePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineDeletePath") ??
        AffineDeletePathChoices.AffineDeletePathChoice1
      );
    },

    choices: [
      // AJOUTE_TEMPLATE //
      AffineDeletePathChoices.AffineDeletePathChoice1,
      AffineDeletePathChoices.AffineDeletePathChoice2,
      AffineDeletePathChoices.AffineDeletePathChoice3,
    ],
  };
};

export const AffineDeletePathPromptChoicesFolders = (appRootPath) => {
  return {
    type: "list",
    name: "AffineDeletePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineDeletePath") ??
        AffineDeletePathChoices.AffineDeletePathChoice1
      );
    },

    choices: (data) => {
      const approx_folder = answers.affine_subfolder;

      const search_path = path.join(appRootPath, approx_folder);

      let subfolders_inside_src = getAllFoldersFromFolder(search_path).map(
        (folderPath) => path.join(approx_folder, folderPath)
      );

      subfolders_inside_src = subfolders_inside_src.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });

      subfolders_inside_src.unshift(approx_folder, "<");

      return subfolders_inside_src;
    },
  };
};

export const AffineDeletePathPromptChoicesFiles = (appRootPath) => {
  return {
    type: "list",
    name: "AffineDeletePath",
    message: ``,

    default: (data) => {
      return (
        getDataFromNPMMaslowJSON("AffineDeletePath") ??
        AffineDeletePathChoices.AffineDeletePathChoice1
      );
    },

    choices: (data) => {
      const affine_file_where_we_use = answers.affine_file_where_we_use;
      const search_path = path.join(appRootPath, affine_file_where_we_use);

      const all_src_files_from_path = readFilesRecursively(
        search_path,
        Constants.exts,
        Constants.ignoreList
      )
        ?.map((filePath) => {
          return path.join(affine_file_where_we_use, filePath);
        })
        ?.filter((path) => {
          return !path.endsWith(".hbs");
        });

      all_src_files_from_path?.unshift(Constants.noChoice, "<");

      return all_src_files_from_path?.map((some_path) => {
        return getPathWithForwardSlashes(some_path);
      });
    },
  };
};
