import I18n from "i18n-js";
import { OPENAI_API_KEY } from "../../../../../index.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { GetFileContentsIfExisting } from "../../../../services/GetFileContentsIfExisting/GetFileContentsIfExisting.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";
import path from "path";
import { GrabSteakInSandwich } from "../../../../services/GrabSteakInSandwich/GrabSteakInSandwich.js";
import { FormatObjectToJSON } from "../../../../services/FormatObjectToJSON/FormatObjectToJSON.js";

async function ExtractSrcObjectRequest(answers, appRootPath, printMsg = true) {
  let appStringsPath;

  try {
    appStringsPath = getPathWithForwardSlashes(
      path.join(appRootPath, answers.ChooseAppStrings)
    );

    // print un message de pose ton culo et attend
    let remoteSpinnerStopper;
    if (printMsg) {
      console.log(` 
Extraction des strings, stockés dans ${appStringsPath}
`);
    }

    let srcObjectExtracted = GrabSteakInSandwich({
      filePath: appStringsPath,
      patternStart: `/* PLOP_INJECT_SRC_STRING */`,
      patternEnd: `/* PLOP_INJECT_SRC_END */`,
    });

    srcObjectExtracted = srcObjectExtracted.trim();
    srcObjectExtracted = srcObjectExtracted.endsWith(",")
      ? srcObjectExtracted.slice(0, -1)
      : srcObjectExtracted;
    srcObjectExtracted = `{ ${srcObjectExtracted} }`;

    srcObjectExtracted = FormatObjectToJSON(srcObjectExtracted);

    //console.log(`GPT successfully grabbed: ${JSON.stringify("")}`);
    if (srcObjectExtracted) {
      answers.srcObj = srcObjectExtracted;
    } else {
      throw new Error(`Failed to get the src obj from .${appStringsPath}`);
    }
  } catch (error) {
    throw new Error(
      `Failed to get the src obj from .${appStringsPath}: ${error}`
    );
  }
}

export { ExtractSrcObjectRequest };
