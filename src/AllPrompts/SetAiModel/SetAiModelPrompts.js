// PLOP_IMPORT_PROMPT

import * as ChooseAIModelPromptText from "./prompts/ChooseAIModel/ChooseAIModelPromptText.js";
import * as ChooseAIModelPromptChoice from "./prompts/ChooseAIModel/ChooseAIModelPromptChoice.js";

export function SetAiModelPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    ChooseAIModelPromptChoice.ChooseAIModelPromptChoices(appRootPath),
  ].reverse();
}
