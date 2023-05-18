import { initAIServiceAndCie } from "./initAIServiceAndCie.js";

function createAIService({
  subfolder,
  appRootPathFromC,
  actualJsFile,
  name,
  promptData,
  plop,
}) {
  return initAIServiceAndCie({
    subfolder,
    actualJsFile,
    promptData,
    plop,
    appRootPathFromC,
  });
}

export { createAIService };
