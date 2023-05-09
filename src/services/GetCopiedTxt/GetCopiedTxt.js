/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import Clipboardy from "clipboardy";

// GetCopiedTxt is a function that returns the currently copied text (from clipboard) as a string, or null otherwise.
// Input: no args
// Output: string containing the currently copied text (from clipboard) or null
// Purpose: to return the currently copied text from the clipboard
function GetCopiedTxt() {
  /* PLOP_INJECT_CODE */
  try {
    const copiedText = Clipboardy.readSync();
    return copiedText;
  } catch (e) {
    return null;
  }
}

export { GetCopiedTxt };
