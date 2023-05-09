import I18n from "i18n-js";

/* PLOP_INJECT_IMPORT */

import { RunAsyncCallbackInCMD } from "../RunAsyncCallbackInCMD/RunAsyncCallbackInCMD.js";

import path from "path";
import { getPathWithForwardSlashes } from "../GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { RegenerateAIFunctionWork } from "./pieces/RegenerateAIFunctionWork.js";
import { GetMaslowJSONObj } from "../GetMaslowJSONObj/getMaslowJSONObj.js";

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
      waitMsg: I18n.t("xfxhHQMw"),
    });

    const errorMsg = I18n.t("xMHKADJN");

    successMsg != null
      ? console.log(`${successMsg}`)
      : console.log(`${errorMsg}`);
  } else {
    const functionFolderPath = getPathWithForwardSlashes(
      path.join(appRootPath, folderPath)
    );

    console.log(`${I18n.t("xQ9kkXlv")} ${functionFolderPath}`);
  }
}
