import { makeCHATGPTRequest } from "./pieces/makeCHATGPTRequest.js";

function setChatGPTGetter(plop) {
  plop.setActionType("REQUETE_CHAT_GPT_QUESTION", async function (answers) {
    await makeCHATGPTRequest(answers);
  });
}
export { setChatGPTGetter };
