import { GetCodeFromChatGPTOutput } from "../../GetCodeFromChatGPTOutput.js";
import { printChatGPTFunctionData } from "../../printChatGPTFunctionData.js";

/**
 *
 * args: functionFilePathFromAppRoot, usePathOrRoot
 *
 * return .....
 *
 * This function .......
 */
function OnGPTFunctionReqSuccess({
  chatGPTOutput,
  functionFilePathFromAppRoot,
  usePathOrRoot,
  onSuccess,
  printDebug,
  functionName,
}) {
  const gold_caviar = GetCodeFromChatGPTOutput(chatGPTOutput);

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

  return gold_caviar;
}

export { OnGPTFunctionReqSuccess };
