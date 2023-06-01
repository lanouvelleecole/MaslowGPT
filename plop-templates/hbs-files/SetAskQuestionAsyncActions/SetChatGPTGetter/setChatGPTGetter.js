import { makeCHATGPTRequest } from "./pieces/makeCHATGPTRequest.js";

function setChatGPTGetter(plop, appRootPath) {
  plop.setActionType("REQUETE_CHAT_GPT_QUESTION", async function (answers) {
    await makeCHATGPTRequest(answers, appRootPath);
  });
}
export { setChatGPTGetter };
