// PLOP_IMPORT_PROMPT

import * as AddCommandPromptsPromptText from "./prompts/AddCommandPrompts/AddCommandPromptsPromptText.js";

import * as AddCommandNamePromptText from "./prompts/AddCommandName/AddCommandNamePromptText.js";

export function AddCommandPromptsPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    AddCommandPromptsPromptText.AddCommandPromptsPromptText(appRootPath),
    //AddCommandPromptsPromptChoice.AddCommandPromptsPromptChoice(appRootPath),

    AddCommandNamePromptText.AddCommandNamePromptText(appRootPath),
    //AddCommandNamePromptChoice.AddCommandNamePromptChoice(appRootPath),
  ].reverse();
}
