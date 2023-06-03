import I18n from "i18n-js";

import path from "path";
import { CloneGithubRepo } from "../../../../services/CloneGithubRepo/CloneGithubRepo.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";
import { deleteFolderIfExisting } from "../../../../services/DeleteFolderIfExisting/DeleteFolderIfExisting.js";

async function CloneTemplateRequest(answers, appRootPath, printMsg = true) {
  try {
    console.log(I18n.t("xbx9kk0m"));

    const AppName = answers.AppName;
    const repoPath = path.join(appRootPath, AppName);

    deleteFolderIfExisting(repoPath);

    const repoPath2 = await CloneGithubRepo(
      "https://github.com/lanouvelleecole/AwesomeRNTemplate",
      repoPath
    );

    if (repoPath2 != null) {
      console.log(I18n.t("x0jpYimz"));

      answers.repoPath = repoPath2;
    } else {
      console.log(I18n.t("xaejKP3U"));
    }
  } catch (error) {
    console.log(I18n.t("xaejKP3U"));
  }
}
export { CloneTemplateRequest };
