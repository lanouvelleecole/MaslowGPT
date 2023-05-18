import { AddCodeUseExample } from "./AddCodeUseExample.js";
import { createFullMaslowJSONFile } from "./createFullMaslowJSONFile.js";
import { CreateNewFunctionShit } from "./CreateNewFunctionShit.js";
import { DeleteOldFunctionShit } from "../../../AllGenerators/SetAIFunctionActions/DeleteOldFunctionShit.js";
import { makeCHATGPTFuncRequest } from "../../../AllGenerators/SetAIFunctionActions/makeCHATGPTFuncRequest.js";
import { OpenFilesInVSCodeAndPrintMsg } from "../../../AllGenerators/SetAIFunctionActions/OpenFilesInVSCodeAndPrintMsg.js";

async function RegenerateAIFunctionWork(answers, appRootPath) {
  await makeCHATGPTFuncRequest(answers, false);
  DeleteOldFunctionShit(answers, appRootPath);
  CreateNewFunctionShit(answers, appRootPath);
  createFullMaslowJSONFile(appRootPath, answers);
  AddCodeUseExample(answers, appRootPath);
  return OpenFilesInVSCodeAndPrintMsg(answers, appRootPath);
}

export { RegenerateAIFunctionWork };
