import { makeCHATGPTFuncRequest } from './pieces/makeCHATGPTFuncRequest.js';

function setChatGPTFunctionGetter(plop) {
  plop.setActionType("REQUETE_CHAT_GPT", async function (answers) {
    await makeCHATGPTFuncRequest(answers);
  });
}
export { setChatGPTFunctionGetter };
