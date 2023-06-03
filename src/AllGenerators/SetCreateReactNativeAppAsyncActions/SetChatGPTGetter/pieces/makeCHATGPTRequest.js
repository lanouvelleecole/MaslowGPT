import { OPENAI_API_KEY } from "../../../../../index.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function makeCHATGPTRequest(answers, appRootPath, printMsg = true) {
  try {
    const prompt = answers.CreateReactNativeApp;

    // print un message de pose ton culo et attend
    let remoteSpinnerStopper;
    if (printMsg) {
      remoteSpinnerStopper = MakeLoadingSpinner(` 
Chat GPT est en train de préparer un délicieux gâteau.... 🥮
Veuillez patienter quelques instants....
`);
    }

    const chat_gpt_output = await GetChatGPTOutput({
      prompt,
      onSuccess: (chatGPTOutput) => {},
      onError: (error) => {},
      apiKey: OPENAI_API_KEY,
    });

    if (remoteSpinnerStopper) {
      remoteSpinnerStopper();
    }

    //console.log(`GPT successfully grabbed: ${JSON.stringify("")}`);
    if (chat_gpt_output) {
      answers.chat_gpt_output = chat_gpt_output;
    } else {
      throw new Error("Failed to get Chat GPT output.");
    }
  } catch (error) {
    throw new Error(`Failed to get Chat GPT output: ${error}`);
  }
}
export { makeCHATGPTRequest };
