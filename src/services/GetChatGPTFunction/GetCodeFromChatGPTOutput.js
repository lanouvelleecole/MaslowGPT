import { FormatObjectToJSON } from "../FormatObjectToJSON/FormatObjectToJSON.js";

function GetCodeFromChatGPTOutput(gptOutputStr) {
  const gptOutput = FormatObjectToJSON(gptOutputStr);

  const codeInfo = {
    mainCode: [gptOutput["mainCode"]],
    codeUsage: [gptOutput["codeUsage"]],
    codeExtension: [gptOutput["codeExtension"]],
    inspiringMessage: [gptOutput["inspiringMessage"]],
    codeImport: [gptOutput["codeImport"]],
    codeExport: [gptOutput["codeExport"]],
    codeImportRelative: [gptOutput["codeImportRelative"]],
    codeUsageReturn: [gptOutput["codeUsage"]],
    codeInstall: [gptOutput["codeInstall"]],
  };

  return codeInfo;
}

export { GetCodeFromChatGPTOutput };
