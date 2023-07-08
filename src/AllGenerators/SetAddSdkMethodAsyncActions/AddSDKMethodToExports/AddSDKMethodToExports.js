import { AddSDKMethodToExportsRequest } from "./pieces/AddSDKMethodToExportsRequest.js";

function AddSDKMethodToExports(plop, appRootPath) {
  plop.setActionType("AddSDKMethodToExports", async function (answers) {
    await AddSDKMethodToExportsRequest(answers, appRootPath);
  });
}
export { AddSDKMethodToExports };
