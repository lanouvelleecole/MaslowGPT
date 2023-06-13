import { GetChatGPTFunction } from "../../services/GetChatGPTFunction/GetChatGPTFunction.js";
import { OPENAI_API_KEY } from "../../../index.js";
import { Constants } from "../../AppConstants/Constants.js";
import { MakeLoadingSpinner } from "../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function makeCHATGPTFuncRequest(answers, printMsg = true) {
  try {
    const putFunctionFolderIn = answers.ask_for_subfolder;

    // le path du fichier .js dans lequel on utilise
    // la chose. ou null, si "On veut rien, capiche"
    const filePathUseChoice = answers.ask_for_js_file;
    let actualFileWhereWeUse =
      filePathUseChoice != Constants.noChoice ? filePathUseChoice : null;

    // print un message de pose ton culo et attend
    let remoteSpinnerStopper;
    if (printMsg) {
      remoteSpinnerStopper = MakeLoadingSpinner(
        ` 
Chat GPT est en train de préparer un délicieux gâteau.... 🥮
Veuillez patienter quelques instants....
`
      );
    }

    const gold_caviar = await GetChatGPTFunction({
      functionName: answers.name,
      functionLanguage: answers.get_ai_service_language,
      functionPurpose: answers.get_ai_service_description,
      functionArgs: answers.get_ai_service_args,
      functionReturnValue: answers.get_ai_service_return_value,
      putFunctionFolderIn,
      functionUsePath: actualFileWhereWeUse,
      apiKey: OPENAI_API_KEY,
      onSuccess: (response) => response,
      onError: (error) => null,
      printDebug: false,
    });

    if (remoteSpinnerStopper) {
      remoteSpinnerStopper();
    }

    //console.log(`GPT successfully grabbed: ${JSON.stringify("")}`);
    if (gold_caviar) {
      answers.gold_caviar = gold_caviar;
    } else {
      throw new Error("Failed to get gold_caviar object");
    }
  } catch (error) {
    throw new Error(`Failed to get gold_caviar object: ${error}`);
  }
}
export { makeCHATGPTFuncRequest };
