/* PLOP_INJECT_IMPORT */

import { RunAsyncCallbackInCMD } from "../../services/RunAsyncCallbackInCMD/RunAsyncCallbackInCMD.js";

import path from "path";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { GetMaslowJSONObj } from "../../services/GetMaslowJSONObj/getMaslowJSONObj.js";

/* PLOP_INJECT_GLOBAL_CODE */

// This function is written in Javascript (Node.js).
// It takes a folderPath as an argument (string, the path of the AI function folder).
// It executes RunAsyncCallbackInCMD.
// It returns two constants arg1 and arg2 which are the first and second arguments passed via command line.

export async function AsyncWork(appRootPath, folderPath) {
  // PLOP_INJECT_CODE

  let maslowJSONObject = GetMaslowJSONObj(appRootPath, folderPath);

  /*console.log(`app root path: ${appRootPath}`);
  console.log(`function folder path: ${folderPath}`);
  console.log(
    `Maslow.json of this thing: ${JSON.stringify(maslowJSONObject, null, 2)}`
  );*/

  if (maslowJSONObject != null) {
    const successMsg = await RunAsyncCallbackInCMD({
      asyncCallback: async () => {
        return;
      },
      waitMsg: ``,
    });

    const errorMsg = ``;

    successMsg != null
      ? console.log(`${successMsg}`)
      : console.log(`${errorMsg}`);
  } else {
    const functionFolderPath = getPathWithForwardSlashes(
      path.join(appRootPath, folderPath)
    );

    console.log(`${``} ${functionFolderPath}`);
  }
}
