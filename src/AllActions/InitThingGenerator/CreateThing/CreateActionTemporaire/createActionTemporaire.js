import { RunAsyncCallbackInCMD } from '../../../../services/RunAsyncCallbackInCMD/RunAsyncCallbackInCMD.js';

import { OPENAI_API_KEY } from '../../../../../index.js';
import { TranslateText } from '../../../../services/TranslateText/TranslateText.js';

function createActionTemporaire({
  subfolder,
  appRootPathFromC,
  actualJsFile,
  name,
}) {
  RunAsyncCallbackInCMD({
    asyncCallback: async () => {
      return TranslateText({
        text: `Bonjour, Veuillez entrer le nom de la chose à ajouter au répertoire`,
        language: "english",
        apiKey: OPENAI_API_KEY,
      });
    },
    waitMsg: "Veuillez patientage s'il te please...",
    onSuccess: (output) => {
      console.log(`output: ${output}`);
    },
    onError: (e) => {
      console.log(`error: ${e}`);
    },
  });
}

export { createActionTemporaire };
