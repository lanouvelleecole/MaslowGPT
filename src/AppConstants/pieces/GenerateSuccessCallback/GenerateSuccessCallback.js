import I18n from "i18n-js";

import { GetGeneratedPageName } from "../GetGeneratedPageName/GetGeneratedPageName.js";
import { userChoices } from "../../../AllPrompts/GetGeneratePrompts/askWhatUserWants.js";
import { GetGeneratedSubpageName } from "../GetGeneratedSubpageName/GetGeneratedSubpageName.js";
import { OpenFilesInEditorAndPrintMsg } from "../../../services/OpenFilesInEditorAndPrintMsg/OpenFilesInEditorAndPrintMsg.js";
import { AppMainComponentPath } from "../AppMainComponentPath/AppMainComponentPath.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
function GenerateSuccessCallback(answers) {
  const what_we_wanna_do = answers.what_we_wanna_do;

  if (what_we_wanna_do == userChoices.createPage) {
    const page_name = answers.name;

    const startPagePath = GetGeneratedPageName(page_name);
    const TheAppMainComponentPath = AppMainComponentPath();

    OpenFilesInEditorAndPrintMsg(
      process.cwd(),
      [startPagePath, TheAppMainComponentPath],
      I18n.t("xvpTcr5u") + `\n\n${startPagePath}\n\n`
    );
  } else if (what_we_wanna_do == userChoices.createSubpage) {
    const subpage_name = answers.name;
    const page_name = answers.get_page_name;

    const startSubpagePath = GetGeneratedSubpageName(page_name, subpage_name);
    const startPagePath = GetGeneratedPageName(page_name);

    OpenFilesInEditorAndPrintMsg(
      process.cwd(),
      [startSubpagePath, startPagePath],

      I18n.t("xvpTcr5u") +
        `\n\n${startSubpagePath}\n\n` +
        I18n.t("x1T3wXxm") +
        `\n\n${startPagePath}\n\n`
    );
  } else {
    return "";
  }
}

export { GenerateSuccessCallback };
