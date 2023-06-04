import { CreateFileFromScratch } from "../../../../services/CreateFileFromScratch/CreateFileFromScratch.js";
import { readFilesRecursively } from "../../../../services/GetAllFilesFromPath/getAllFilesFromPath.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { GetFileContentsIfExisting } from "../../../../services/GetFileContentsIfExisting/GetFileContentsIfExisting.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";
import path from "path";

async function ReplaceWordsInFolderRequest(
  answers,
  appRootPath,
  printMsg = true
) {
  try {
    const repoPath = answers.repoPath;
    const AppName = answers.AppName;

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
        getPathWithForwardSlashes(path.join(appRootPath, AppName, somepath))
      );

      allFilesInFolder.forEach((fileInFolder) => {
        const fileContents = GetFileContentsIfExisting(fileInFolder);

        const fileContentsDeupoinzero = fileContents.replace(
          new RegExp("AwesomeTemplate", "g"),
          AppName
        );

        const fileContentsTroipoinzero = fileContentsDeupoinzero.replace(
          new RegExp("awesometemplate", "g"),
          AppName.toLowerCase()
        );

        if (fileContentsTroipoinzero != fileContents) {
          CreateFileFromScratch(fileInFolder, fileContentsTroipoinzero);
        }
      });
    }
  } catch (error) {
    throw new Error(`Failed to create RN app: ${error}`);
  }
}

export { ReplaceWordsInFolderRequest };
