import I18n from "i18n-js";

import { GetGeneratedPageName } from "../GetGeneratedPageName/GetGeneratedPageName.js";
import { userChoices } from "../../../AllPrompts/GetGeneratePrompts/askWhatUserWants.js";
import { GetGeneratedSubpageName } from "../GetGeneratedSubpageName/GetGeneratedSubpageName.js";
import { OpenFilesInEditorAndPrintMsg } from "../../../services/OpenFilesInEditorAndPrintMsg/OpenFilesInEditorAndPrintMsg.js";
import { AppMainComponentPath } from "../AppMainComponentPath/AppMainComponentPath.js";
import { getPathWithForwardSlashes } from "../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import path from "path";
import { toPascalCase } from "../../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
function GetQuestionSuccessCallback(answers) {
  const questionnaire_folder_path = answers["questionnaire_folder_path"];
  const questionnaire_file_name = answers["questionnaire_file_name"];
  const question_name = toPascalCase(answers["question_name"]);

  const questionnaire_list_path = getPathWithForwardSlashes(
    path.join(process.cwd(), questionnaire_folder_path, questionnaire_file_name)
  );
  const question_path = getPathWithForwardSlashes(
    path.join(
      process.cwd(),
      questionnaire_folder_path,
      "Questions",
      question_name,
      `${question_name}.js`
    )
  );

  OpenFilesInEditorAndPrintMsg(
    process.cwd(),
    [question_path, questionnaire_list_path],
    I18n.t("xvpTcr5u") + `\n\n${question_path}\n\n`
  );
}

export { GetQuestionSuccessCallback };
