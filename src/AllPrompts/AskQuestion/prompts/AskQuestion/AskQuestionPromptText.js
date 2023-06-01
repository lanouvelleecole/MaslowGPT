import I18n from "i18n-js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import path from "path";
import { answers } from "../../../../../index.js";

import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { GetFileContentsIfExisting } from "../../../../services/GetFileContentsIfExisting/GetFileContentsIfExisting.js";

const AskQuestionPromptText = (appRootPath) => {
  return {
    type: "input",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AskQuestion",
    default: (data) => {
      return getDataFromNPMMaslowJSON("AskQuestion");
    },

    message: ``,
  };
};

const AskQuestionPromptEditor = (appRootPath) => {
  return {
    type: "editor",

    filter: function (answer) {
      // Use the trim() method to remove whitespace from both sides of the answer
      return answer.trim();
    },

    name: "AskQuestion",
    default: (data) => {
      const question_txt_path = getPathWithForwardSlashes(
        path.join(appRootPath, answers.GptQuestionName, "question.txt")
      );
      const question_txt_from_q_folder =
        GetFileContentsIfExisting(question_txt_path);

      return (
        question_txt_from_q_folder ?? getDataFromNPMMaslowJSON("AskQuestion")
      );
    },

    message: I18n.t("xa8PiCkJ"),
  };
};

export { AskQuestionPromptText, AskQuestionPromptEditor };
