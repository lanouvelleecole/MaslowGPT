import { ReplaceWordsInFolderRequest } from "./pieces/ReplaceWordsInFolderRequest.js";

function ReplaceWordsInFolder(plop, appRootPath) {
  plop.setActionType("ReplaceWordsInFolder", async function (answers) {
    await ReplaceWordsInFolderRequest(answers, appRootPath);
  });
}
export { ReplaceWordsInFolder };
