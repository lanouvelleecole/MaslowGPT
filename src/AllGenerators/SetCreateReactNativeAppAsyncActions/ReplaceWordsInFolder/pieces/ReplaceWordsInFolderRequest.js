import { readFilesRecursively } from "../../../../services/GetAllFilesFromPath/getAllFilesFromPath.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";
import path from "path";

async function ReplaceWordsInFolderRequest(
  answers,
  appRootPath,
  printMsg = true
) {
  try {
    console.log("remplacage");

    const repoPath = answers.repoPath;

    if (repoPath != null) {
      const allFilesInFolder = readFilesRecursively(
        repoPath,
        [
          ".json",
          ".md",
          ".gradle",
          ".java",
          ".xml",
          ".mm",
          ".plist",
          ".storyboard",
          ".pbxproj",
          ".xcscheme",
          ".m",
          "",
        ],
        [".git", "assets"]
      ).map((somepath) =>
        getPathWithForwardSlashes(path.join(appRootPath, somepath))
      );

      debugger;
    }
  } catch (error) {
    throw new Error(`Failed to create RN app: ${error}`);
  }
}

export { ReplaceWordsInFolderRequest };
