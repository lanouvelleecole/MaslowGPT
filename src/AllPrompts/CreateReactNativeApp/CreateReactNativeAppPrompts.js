// PLOP_IMPORT_PROMPT

import * as AppNamePromptText from "./prompts/AppName/AppNamePromptText.js";
import * as AppNamePromptChoice from "./prompts/AppName/AppNamePromptChoice.js";


export function CreateReactNativeAppPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

		AppNamePromptText.AppNamePromptText(appRootPath),
		//AppNamePromptChoice.AppNamePromptChoices(appRootPath),
  ].reverse();
}
