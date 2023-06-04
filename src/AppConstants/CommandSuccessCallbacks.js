import { GenerateSuccessCallback } from "./pieces/GenerateSuccessCallback/GenerateSuccessCallback.js";
import { GetGeneratedPageName } from "./pieces/GetGeneratedPageName/GetGeneratedPageName.js";
import I18n from "i18n-js";
import { userChoices } from "../AllPrompts/GetGeneratePrompts/askWhatUserWants.js";
import path from "path";
import { GetGeneratedSubpageName } from "./pieces/GetGeneratedSubpageName/GetGeneratedSubpageName.js";
import { GetQuestionSuccessCallback } from "./pieces/GetQuestionSuccessCallback/GetQuestionSuccessCallback.js";
import { CRNASuccessCallback } from "./pieces/CRNASuccessCallback/CRNASuccessCallback.js";
/**
 *
 */
export const CommandSuccessCallbacks = {
  // ADD_CMD_DESC
  "ask-question": (answers) => {
    return ``;
  },
  generate: (answers) => {
    GenerateSuccessCallback(answers);
  },
  "create-react-native-app": (answers) => {
    CRNASuccessCallback(answers);
  },

  "duplicate-thing": (answers) => {
    return ``;
  },
  "delete-thing": (answers) => {
    return ``;
  },

  "add-string": (answers) => {
    return ``;
  },
  question: (answers) => {
    GetQuestionSuccessCallback(answers);
  },
  "regen-ai-func": (answers) => {
    return ``;
  },
  "add-string-quick": (answers) => {
    return ``;
  },
  "install-everything": (answers) => {
    return ``;
  },
};
