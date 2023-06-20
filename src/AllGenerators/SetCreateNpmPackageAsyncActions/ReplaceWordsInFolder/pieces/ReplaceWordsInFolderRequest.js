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
    const PkgName = answers.PkgName;

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
        getPathWithForwardSlashes(path.join(appRootPath, PkgName, somepath))
      );

      allFilesInFolder.forEach((fileInFolder) => {
        const fileContents = GetFileContentsIfExisting(fileInFolder);

        const fileContentsDeupoinzero = fileContents.replace(
          new RegExp("AwesomeNPMTemplate", "g"),
          PkgName
        );

        const fileContentsTroipoinzero = fileContentsDeupoinzero.replace(
          new RegExp("awesome-npm-template", "g"),
          PkgName.toLowerCase()
        );

        if (fileContentsTroipoinzero != fileContents) {
          CreateFileFromScratch(fileInFolder, fileContentsTroipoinzero);
        }
      });
    }
  } catch (error) {
    throw new Error(`Failed to create NPM app: ${error}`);
  }
}

export { ReplaceWordsInFolderRequest };
