import { CloneTemplateRequest } from "./pieces/CloneTemplateRequest.js";

function CloneTemplate(plop, appRootPath) {
  plop.setActionType("CloneTemplate", async function (answers) {
    await CloneTemplateRequest(answers, appRootPath);
  });
}
export { CloneTemplate };
