import { TemplateActionAsyncRequest } from "./pieces/TemplateActionAsyncRequest.js";

function TemplateActionAsync(plop, appRootPath) {
  plop.setActionType("TemplateActionAsync", async function (answers) {
    await TemplateActionAsyncRequest(answers, appRootPath);
  });
}
export { TemplateActionAsync };
