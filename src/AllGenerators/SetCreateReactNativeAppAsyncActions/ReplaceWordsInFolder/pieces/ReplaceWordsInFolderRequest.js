import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function ReplaceWordsInFolderRequest(
  answers,
  appRootPath,
  printMsg = true
) {
  try {
    console.log("remplacage");
  } catch (error) {
    throw new Error(`Failed to create RN app: ${error}`);
  }
}
export { ReplaceWordsInFolderRequest };
