// PLOP_IMPORT_PROMPT

import * as EndpointNamePromptText from "./prompts/EndpointName/EndpointNamePromptText.js";
import * as EndpointNamePromptChoice from "./prompts/EndpointName/EndpointNamePromptChoice.js";


export function AddApiEndpointPrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

		EndpointNamePromptText.EndpointNamePromptText(appRootPath),
		//EndpointNamePromptChoice.EndpointNamePromptChoices(appRootPath),
  ].reverse();
}
