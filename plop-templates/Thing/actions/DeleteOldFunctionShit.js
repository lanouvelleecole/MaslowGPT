import path from "path";
import { DeleteFolderContents } from "./DeleteFolderContents.js";

function DeleteOldFunctionShit(answers, appRootPath) {
  const functionFolderPathFromAppRoot = `${answers.ask_for_subfolder}/${answers.name}`;
  const functionFolderPathFromC = path.join(
    appRootPath,
    functionFolderPathFromAppRoot
  );

  DeleteFolderContents({
    folderPath: functionFolderPathFromC,
    whiteList: ["pieces", "Maslow.json", "prompts"],
  });
}
export { DeleteOldFunctionShit };
