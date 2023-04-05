import { deletionPrompt } from "./prompts/askIfWeCanDeleteAppJs.js";

export function getAddDefaultAppTemplatePrompts() {
  return [deletionPrompt];
}
