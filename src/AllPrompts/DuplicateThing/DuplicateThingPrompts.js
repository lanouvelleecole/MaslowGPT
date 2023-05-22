// PLOP_IMPORT_PROMPT

import * as DuplicatePathPromptText from "./prompts/DuplicatePath/DuplicatePathPromptText.js";
import * as DuplicatePathPromptChoice from "./prompts/DuplicatePath/DuplicatePathPromptChoice.js";

import * as OriginalPathPromptText from "./prompts/OriginalPath/OriginalPathPromptText.js";
import * as OriginalPathPromptChoice from "./prompts/OriginalPath/OriginalPathPromptChoice.js";

import * as AffineOriginalPathPromptText from "./prompts/AffineOriginalPath/AffineOriginalPathPromptText.js";
import * as AffineOriginalPathPromptChoice from "./prompts/AffineOriginalPath/AffineOriginalPathPromptChoice.js";

export function DuplicateThingPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    DuplicatePathPromptText.DuplicatePathPromptText(appRootPath),
    //DuplicatePathPromptChoice.DuplicatePathPromptChoices(appRootPath),

    OriginalPathPromptChoice.OriginalPathPromptChoicesAll(appRootPath),

    AffineOriginalPathPromptText.AffineOriginalPathPromptText(appRootPath),
    //AffineOriginalPathPromptChoice.AffineOriginalPathPromptChoices(appRootPath),
  ].reverse();
}
