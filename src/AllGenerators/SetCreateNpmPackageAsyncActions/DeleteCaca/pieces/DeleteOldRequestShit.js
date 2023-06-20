import path from "path";
import { DeleteFolderContents } from "../../../../services/DeleteFolderContents/DeleteFolderContents.js";

function DeleteOldRequestShit(answers, appRootPath) {
  const functionFolderPathFromAppRoot = `${answers.GptQuestionName}`;
  const functionFolderPathFromC = path.join(
    appRootPath,
    functionFolderPathFromAppRoot
  );

  DeleteFolderContents({
    folderPath: functionFolderPathFromC,
    whiteList: ["pieces", "Maslow.json", "prompts", "QNA"],
  });
}
export { DeleteOldRequestShit };
