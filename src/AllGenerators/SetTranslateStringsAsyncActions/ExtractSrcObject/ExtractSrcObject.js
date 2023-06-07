import { ExtractSrcObjectRequest } from "./pieces/ExtractSrcObjectRequest.js";

function ExtractSrcObject(plop, appRootPath) {
  plop.setActionType("ExtractSrcObject", async function (answers) {
    await ExtractSrcObjectRequest(answers, appRootPath);
  });
}
export { ExtractSrcObject };
