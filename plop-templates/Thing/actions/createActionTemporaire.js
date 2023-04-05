import { getRandomAIFunction } from "./getRandomAIFunction.js";
import { RunAsyncCallbackInCMD } from "./RunAsyncCallbackInCMD/RunAsyncCallbackInCMD.js";

function createActionTemporaire({
  subfolder,
  appRootPathFromC,
  actualJsFile,
  name,
}) {
  RunAsyncCallbackInCMD({
    asyncCallback: async () => {
      await getRandomAIFunction();
    },
    waitMsg: "Veuillez patientage s'il te please...",
    successMsg: "C'est la fête au village !!! Succès !!!",
    errorMsg: "Vazy Nique Ta Mère....",
  });
}

export { createActionTemporaire };
