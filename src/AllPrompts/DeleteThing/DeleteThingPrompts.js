// PLOP_IMPORT_PROMPT

import * as DeletePathPromptText from "./prompts/DeletePath/DeletePathPromptText.js";
import * as DeletePathPromptChoice from "./prompts/DeletePath/DeletePathPromptChoice.js";

import * as AffineDeletePathPromptText from "./prompts/AffineDeletePath/AffineDeletePathPromptText.js";
import * as AffineDeletePathPromptChoice from "./prompts/AffineDeletePath/AffineDeletePathPromptChoice.js";

export function DeleteThingPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    DeletePathPromptChoice.DeletePathPromptChoicesAll(appRootPath),

    AffineDeletePathPromptText.AffineDeletePathPromptText(appRootPath),
    //AffineDeletePathPromptChoice.AffineDeletePathPromptChoices(appRootPath),
  ].reverse();
}
