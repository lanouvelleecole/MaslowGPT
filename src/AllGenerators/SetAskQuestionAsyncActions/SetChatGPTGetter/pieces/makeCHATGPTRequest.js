import { OPENAI_API_KEY } from "../../../../../index.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { getDataFromNPMMaslowJSON } from "../../../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function makeCHATGPTRequest(answers, printMsg = true) {
  try {
    const prompt = answers.AskQuestion;

    // print un message de pose ton culo et attend
    let remoteSpinnerStopper;
    if (printMsg) {
      remoteSpinnerStopper = MakeLoadingSpinner(` 
Chat GPT est en train de préparer un délicieux gâteau.... 🥮
Veuillez patienter quelques instants....
`);
    }

    const chat_gpt_output = await GetChatGPTOutput({
      model_chosen:
        getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
      prompt:
        prompt +
        `. In your output, break long lines (60+ characters) into smaller pieces.`,
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

      return;
    } else {
      throw new Error("Failed to get Chat GPT output.");
    }
  } catch (error) {
    throw new Error(`Failed to get Chat GPT output: ${error}`);
  }
}
export { makeCHATGPTRequest };
