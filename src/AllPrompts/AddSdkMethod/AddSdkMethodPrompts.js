// PLOP_IMPORT_PROMPT

import * as SDKMethodNamePromptText from "./prompts/SDKMethodName/SDKMethodNamePromptText.js";
import * as SDKMethodNamePromptChoice from "./prompts/SDKMethodName/SDKMethodNamePromptChoice.js";


export function AddSdkMethodPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

		SDKMethodNamePromptText.SDKMethodNamePromptText(appRootPath),
		//SDKMethodNamePromptChoice.SDKMethodNamePromptChoices(appRootPath),
  ].reverse();
}
