// PLOP_IMPORT_PROMPT

import * as GptQuestionNamePromptText from "./prompts/GptQuestionName/GptQuestionNamePromptText.js";

import * as AskQuestionPromptText from "./prompts/AskQuestion/AskQuestionPromptText.js";

export function AskQuestionPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    AskQuestionPromptText.AskQuestionPromptEditor(appRootPath),

    GptQuestionNamePromptText.GptQuestionNamePromptText(appRootPath),
  ].reverse();
}
