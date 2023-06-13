/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import { encode } from "gpt-3-encoder";

export function GetPromptTokensLength(prompt) {
  return encode(prompt).length;
}
