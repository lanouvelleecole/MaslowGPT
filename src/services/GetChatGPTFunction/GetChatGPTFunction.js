import { OnGPTFunctionReqSuccess } from "./pieces/OnGPTFunctionReqSuccess/OnGPTFunctionReqSuccess.js";
import { GetChatGPTOutput } from "../GetChatGPTOutput/GetChatGPTOutput.js";
import { GetCodeFromChatGPTOutput } from "./GetCodeFromChatGPTOutput.js";
import path from "path";
import { GetRelativePath } from "../GetRelativePath/GetRelativePath.js";
import { printChatGPTFunctionData } from "./printChatGPTFunctionData.js";
import { getChatGPTFunctionPrompt } from "./getChatGPTFunctionPrompt.js";
import { getDataFromNPMMaslowJSON } from "../GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

async function GetChatGPTFunction({
  functionName,
  functionLanguage,
  functionPurpose,
  functionArgs,
  functionReturnValue,
  functionUsePath,
  putFunctionFolderIn,
  apiKey,
  onSuccess,
  onError,
  printDebug = false,
}) {
  // Promise nous permet de pouvoir retourner les données
  // de manière asynchrone.

  const functionFilePathFromAppRoot = path.join(
    putFunctionFolderIn,
    functionName,
    functionName
  );

  // le path du folder contenant le fichier d'usage (root appli par défaut)
  // ceci sert de point de départ du path relatif de la fonction
  const usePathOrRoot = path.dirname(functionUsePath ?? "/");

  // le path relatif de la fonction
  const relativePath = GetRelativePath(
    functionFilePathFromAppRoot,
    usePathOrRoot
  );

  // should output "../plop-templates/Commands/AddQuestionTestUtil/TestUtil.js"
  /*console.log(
      `Here's the relative path, produced from GetRelativePath("${functionFilePathFromAppRoot}", "${usePathOrRoot}"): ${relativePath}`
    );*/

  const chatGPTOutput = await GetChatGPTOutput({
    /*onSuccess: (cavi) => {
      console.log(`Ca va !!!: ${cavi}`);
    },
    onError: (e) => {
      console.log(`Ca pue`);
    },*/
    model_chosen:
      getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
    prompt: getChatGPTFunctionPrompt({
      functionName,
      functionLanguage,
      functionPurpose,
      functionArgs,
      functionReturnValue,
      functionFilePathFromAppRoot,
      relativePath,
    }),

    apiKey,
  });

  if (chatGPTOutput) {
    return OnGPTFunctionReqSuccess({
      chatGPTOutput,
      functionFilePathFromAppRoot,
      usePathOrRoot,
      onSuccess,
      printDebug,
      functionName,
    });
  } else {
    onError ? onError(null) : 42;

    return null;
  }
}

export { GetChatGPTFunction };
