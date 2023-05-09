import I18n from "i18n-js";

/* PLOP_INJECT_IMPORT */

import { answers, OPENAI_API_KEY, params } from "../../../index.js";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { getClosestJSFilesWithPattern } from "../../services/GetClosestJSFilesWithPattern/getClosestJSFilesWithPattern.js";
import path from "path";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import { GetUniqueID } from "../../services/GetUniqueID/GetUniqueID.js";
import { StringIsString } from "../../../src/services/ReplaceCopiedTextInFile/StringIsString.js";
import { TranslateText } from "../../../src/services/TranslateText/TranslateText.js";

const repo_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "repo_name",

  // Prompt to display on command line
  message:
    "Quel est le nom du repositoire dans lequel on va stocker ce string ? par défaut: ",

  default: "AppStrings",
};

const string_name = {
  type: "input",

  default: GetUniqueID(7),

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "string_name",

  // Prompt to display on command line
  message: I18n.t("xAq0rQ80"),
};

const string_fr = {
  type: "editor",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  default: (data) => {
    let currentCopiedTxt = params.copiedStr;

    const isItAQuotedStr =
      currentCopiedTxt != null && StringIsString(currentCopiedTxt);

    if (isItAQuotedStr) {
      currentCopiedTxt = currentCopiedTxt.substring(
        1,
        currentCopiedTxt.length - 1
      );
    }

    return currentCopiedTxt;
  },

  // Variable name for this input
  name: "string_fr",

  // Prompt to display on command line
  message: I18n.t("xA5VJgC"),
};

const string_eng = {
  type: "editor",

  default: (data) =>
    Promise.resolve(
      TranslateText({
        text: answers.string_fr,
        language: "english",
        apiKey: OPENAI_API_KEY,
      })
    ),

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "string_eng",

  // Prompt to display on command line
  message: I18n.t("xxjqZAJa"),
};

const string_repo_file_path = (appRootPath) => {
  return {
    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    default: (data) => {
      //console.log(`answers: ${JSON.stringify(answers)}`);

      return getDataFromNPMMaslowJSON("string_repo_file_path");
    },

    type: "list",

    // Variable name for this input
    name: "string_repo_file_path",

    // Prompt to display on command line
    message: I18n.t("xuMM4l4"),

    choices: (data) => {
      const string_repo_folder_path = answers.string_repo_folder_path;
      const full_string_repo_folder_path = getPathWithForwardSlashes(
        path.join(appRootPath, string_repo_folder_path)
      );

      const string_repo_paths = getClosestJSFilesWithPattern(
        full_string_repo_folder_path,
        "PLOP_INJECT_ENG_STRING",
        ``
      );

      string_repo_paths?.sort();

      string_repo_paths?.push("<");

      return string_repo_paths;
    },
  };
};

export { string_name };
export { string_fr };
export { string_eng };
export { repo_name };
export { string_repo_file_path };
