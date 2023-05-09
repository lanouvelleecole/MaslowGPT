/* PLOP_INJECT_IMPORT */
import Clipboardy from "clipboardy";

/* PLOP_INJECT_GLOBAL_CODE */

const SetCopiedText = (text) => {
  /* PLOP_INJECT_CODE */

  try {
    Clipboardy.writeSync(text);
    return 42;
  } catch (err) {
    console.log(err);
    return -1;
  }
};

export { SetCopiedText };
