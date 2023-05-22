// PLOP_IMPORT_PROMPT

import * as AddCommandActionsPromptText from "./prompts/AddCommandActions/AddCommandActionsPromptText.js";

import * as AddCommandNamePromptText from "./prompts/AddCommandName/AddCommandNamePromptText.js";

export function AddCommandActionsPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    AddCommandActionsPromptText.AddCommandActionsPromptText(appRootPath),
    //AddCommandActionsPromptChoice.AddCommandActionsPromptChoice(appRootPath),

    AddCommandNamePromptText.AddCommandNamePromptText(appRootPath),
    //AddCommandNamePromptChoice.AddCommandNamePromptChoice(appRootPath),
  ].reverse();
}
