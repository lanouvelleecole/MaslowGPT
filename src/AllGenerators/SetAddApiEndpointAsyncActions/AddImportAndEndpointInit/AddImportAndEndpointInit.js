import { AddImportAndEndpointInitRequest } from "./pieces/AddImportAndEndpointInitRequest.js";

function AddImportAndEndpointInit(plop, appRootPath) {
  plop.setActionType("AddImportAndEndpointInit", async function (answers) {
    await AddImportAndEndpointInitRequest(answers, appRootPath);
  });
}
export { AddImportAndEndpointInit };
