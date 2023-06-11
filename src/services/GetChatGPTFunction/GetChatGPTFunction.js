import { GetChatGPTOutput } from "../GetChatGPTOutput/GetChatGPTOutput.js";
import { GetCodeFromChatGPTOutput } from "./GetCodeFromChatGPTOutput.js";
import path from "path";
import { GetRelativePath } from "../GetRelativePath/GetRelativePath.js";
import { printChatGPTFunctionData } from "./printChatGPTFunctionData.js";
import { getChatGPTFunctionPrompt } from "./getChatGPTFunctionPrompt.js";

function GetChatGPTFunction({
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
  return new Promise((resolve, reject) => {
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

    GetChatGPTOutput({
      prompt: getChatGPTFunctionPrompt({
        functionName,
        functionLanguage,
        functionPurpose,
        functionArgs,
        functionReturnValue,
        functionFilePathFromAppRoot,
        relativePath,
      }),
      onSuccess: (chatGPTOutput) => {
        const gold_caviar = GetCodeFromChatGPTOutput(chatGPTOutput);

        resolve(gold_caviar);

        if (onSuccess) {
          onSuccess(gold_caviar);
        }

        printChatGPTFunctionData({
          gold_caviar,
          printDebug,
          functionName,
          functionFilePathFromAppRoot,
          usePathOrRoot,
        });
      },
      onError: (error) => {
        reject(null);

        if (onError) {
          onError(null);
        }
      },
      apiKey,
    });
  });
}

export { GetChatGPTFunction };
