/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import fs from "fs";
import { StringIsString } from "./StringIsString.js";

function ReplaceCopiedTextInFile(filePath, patternStr, replacement) {
  const isItAQuotedStr = StringIsString(patternStr);

  if (!isItAQuotedStr) {
    replacement = `\${${replacement}}`;
  }

  let code = fs.readFileSync(filePath);
  code = code.toString().replace(patternStr, replacement);
  fs.writeFileSync(filePath, code);
  return code == -1 ? -1 : code;
}

export default ReplaceCopiedTextInFile;
