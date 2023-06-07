import { TranslateSrcRequest } from "./pieces/TranslateSrcRequest.js";

function TranslateSrc(plop, appRootPath) {
  plop.setActionType("TranslateSrc", async function (answers) {
    await TranslateSrcRequest(answers, appRootPath);
  });
}
export { TranslateSrc };
