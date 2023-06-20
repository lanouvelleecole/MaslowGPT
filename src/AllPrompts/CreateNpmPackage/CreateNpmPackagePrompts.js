// PLOP_IMPORT_PROMPT

import * as PkgNamePromptText from "./prompts/PkgName/PkgNamePromptText.js";
import * as PkgNamePromptChoice from "./prompts/PkgName/PkgNamePromptChoice.js";


export function CreateNpmPackagePrompts(appRootPath) {
  return [
    // PLOP_IMPORT_PROMPT_USE

		PkgNamePromptText.PkgNamePromptText(appRootPath),
		//PkgNamePromptChoice.PkgNamePromptChoices(appRootPath),
  ].reverse();
}
