/* PLOP_INJECT_IMPORT */

import { GetMaslowJSONObj } from "../../prompts/getMaslowJSONObj.js";
import { RunAsyncCallbackInCMD } from "../RunAsyncCallbackInCMD/RunAsyncCallbackInCMD.js";

import path from "path";
import { getPathWithForwardSlashes } from "../getPathWithForwardSlashes.js";
import { RegenerateAIFunctionWork } from "./pieces/RegenerateAIFunctionWork.js";

/* PLOP_INJECT_GLOBAL_CODE */

// This function is written in Javascript (Node.js).
// It takes a folderPath as an argument (string, the path of the AI function folder).
// It executes RunAsyncCallbackInCMD.
// It returns two constants arg1 and arg2 which are the first and second arguments passed via command line.

export async function RegenerateAIFunction(appRootPath, folderPath) {
  // PLOP_INJECT_CODE

  let maslowJSONObject = GetMaslowJSONObj(appRootPath, folderPath);

  /*console.log(`app root path: ${appRootPath}`);
  console.log(`function folder path: ${folderPath}`);
  console.log(
    `Maslow.json of this function: ${JSON.stringify(maslowJSONObject, null, 2)}`
  );*/

  if (maslowJSONObject != null) {
    const successMsg = await RunAsyncCallbackInCMD({
      asyncCallback: async () => {
        return RegenerateAIFunctionWork(maslowJSONObject, appRootPath);
      },
      waitMsg:
        "La fonction est en cours de ré-génération... Patientes quelques instants...",
    });
    const errorMsg =
      "Un problème est survenu durant la ré-génération de fonction.... Essaie à nouveau :-) !";

    successMsg != null
      ? console.log(`${successMsg}`)
      : console.log(`${errorMsg}`);
  } else {
    const functionFolderPath = getPathWithForwardSlashes(
      path.join(appRootPath, folderPath)
    );

    console.log(
      `Il n'existe pas de fichier Maslow.json valide dans le dossier ${functionFolderPath}`
    );
  }
}
