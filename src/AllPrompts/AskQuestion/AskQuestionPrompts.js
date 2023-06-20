// PLOP_IMPORT_PROMPT

import * as AnswerFileNamePromptText from "./prompts/AnswerFileName/AnswerFileNamePromptText.js";
import * as AnswerFileNamePromptChoice from "./prompts/AnswerFileName/AnswerFileNamePromptChoice.js";


import * as GptQuestionNamePromptText from "./prompts/GptQuestionName/GptQuestionNamePromptText.js";

import * as AskQuestionPromptText from "./prompts/AskQuestion/AskQuestionPromptText.js";

export function AskQuestionPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

		AnswerFileNamePromptText.AnswerFileNamePromptText(appRootPath),
		//AnswerFileNamePromptChoice.AnswerFileNamePromptChoices(appRootPath),

    AskQuestionPromptText.AskQuestionPromptEditor(appRootPath),

    GptQuestionNamePromptText.GptQuestionNamePromptText(appRootPath),
  ].reverse();
}
