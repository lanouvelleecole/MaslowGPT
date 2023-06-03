import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function CloneTemplateRequest(answers, appRootPath, printMsg = true) {
  try {
    console.log("clonage");
  } catch (error) {
    throw new Error(`Failed to create RN app: ${error}`);
  }
}
export { CloneTemplateRequest };
