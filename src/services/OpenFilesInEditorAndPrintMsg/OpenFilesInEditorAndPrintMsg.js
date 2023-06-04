import path from "path";
import { openVSCode } from "../OpenVSCode/openVSCode.js";

function OpenFilesInEditorAndPrintMsg(folderPath, filePaths, msg) {
  console.log(msg);

  // ouvre le folder souhaité avec les fichiers souhaités,
  // dans l'éditeur souhaité
  // (selon dispo)
  openVSCode({
    folderPath,
    filePaths,
  });
}
export { OpenFilesInEditorAndPrintMsg };
