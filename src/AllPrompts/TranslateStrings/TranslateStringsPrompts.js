// PLOP_IMPORT_PROMPT

import * as ChooseLanguagePromptText from "./prompts/ChooseLanguage/ChooseLanguagePromptText.js";
import * as ChooseLanguagePromptChoice from "./prompts/ChooseLanguage/ChooseLanguagePromptChoice.js";

import * as ChooseAppStringsPromptText from "./prompts/ChooseAppStrings/ChooseAppStringsPromptText.js";
import * as ChooseAppStringsPromptChoice from "./prompts/ChooseAppStrings/ChooseAppStringsPromptChoice.js";

import * as AffineAppStringsPromptText from "./prompts/AffineAppStrings/AffineAppStringsPromptText.js";
import * as AffineAppStringsPromptChoice from "./prompts/AffineAppStrings/AffineAppStringsPromptChoice.js";

export function TranslateStringsPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

    ChooseLanguagePromptChoice.ChooseLanguagePromptChoices(appRootPath),
    ChooseAppStringsPromptChoice.ChooseAppStringsPromptChoicesFiles(
      appRootPath
    ),

    AffineAppStringsPromptText.AffineAppStringsPromptText(appRootPath),
    //AffineAppStringsPromptChoice.AffineAppStringsPromptChoices(appRootPath),
  ].reverse();
}
