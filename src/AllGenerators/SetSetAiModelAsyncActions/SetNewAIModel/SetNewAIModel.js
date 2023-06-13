import { SetNewAIModelRequest } from "./pieces/SetNewAIModelRequest.js";

function SetNewAIModel(plop, appRootPath) {
  plop.setActionType("SetNewAIModel", async function (answers) {
    await SetNewAIModelRequest(answers, appRootPath);
  });
}
export { SetNewAIModel };
