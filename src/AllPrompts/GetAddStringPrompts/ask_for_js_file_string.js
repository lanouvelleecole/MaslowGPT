import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import path from "path";
import { readFilesRecursively } from "../../services/GetAllFilesFromPath/getAllFilesFromPath.js";
import { Constants } from "../../AppConstants/Constants.js";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { answers, second_cmd_arg } from "../../../index.js";

export const ask_for_js_file_string = (appRootPath) => {
  return {
    type: "list",
    name: "ask_for_js_file_string",
    default: (data) => {
      return getDataFromNPMMaslowJSON("ask_for_js_file_string") ?? "App.js";
    },

    when: (data) => {
      return second_cmd_arg == null;
    },

    message: `${I18n.t("xkRatDXn")} ${appRootPath}`,
    choices: (data) => {
      const affine_file_where_we_use_string =
        answers.affine_file_where_we_use_string;
      const search_path = path.join(
        appRootPath,
        affine_file_where_we_use_string
      );

      const all_src_files_from_path = readFilesRecursively(
        search_path,
        Constants.exts,
        Constants.ignoreList
      )
        ?.map((filePath) => {
          return path.join(affine_file_where_we_use_string, filePath);
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
