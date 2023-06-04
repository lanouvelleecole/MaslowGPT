import I18n from "i18n-js";

import path from "path";
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
function CRNASuccessCallback(answers) {
  const AppName = answers.AppName;
  const AppJSPath = path.join(process.cwd(), AppName, "App.js");

  OpenFilesInEditorAndPrintMsg(
    path.join(process.cwd(), AppName),
    [AppJSPath],
    I18n.t("x45NCPh6") +
      `\n\n` +
      `cd "${path.join(
        process.cwd(),
        AppName
      )}"; npx yarn install; npx react-native run-android;

${I18n.t("xvpTcr5u")}` +
      `\n\n${AppJSPath}\n\n`
  );
}

export { CRNASuccessCallback };
