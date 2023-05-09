import I18n from "i18n-js";
/* PLOP_IMPORT_PromptUserWithoutPrompting */
import PromptUserWithoutPrompting from "../../services/PromptUserWithoutPrompting/PromptUserWithoutPrompting.js";
/* PLOP_IMPORT_PromptUserWithoutPrompting */
import { AddIntlString } from "../../AllActions/InitAddIntlString/AddIntlString.js";
import { getAddStringPrompts } from "../../AllPrompts/GetAddStringPrompts/getAddStringPrompts.js";

export async function AddStringQuick() {
  /* PLOP_INJECT_CODE */

  console.log(
    `
${I18n.t("xKnOkicO")}
`
  );

  const appRootPath = process.cwd();

  // prépare l'objet answers, sans prompting
  let prompts = getAddStringPrompts(appRootPath);

  /* PLOP_CODE_LINES_PromptUserWithoutPrompting */
  const answers = await PromptUserWithoutPrompting(prompts);
  /* PLOP_CODE_LINES_PromptUserWithoutPrompting */

  //console.log(JSON.stringify(answers, null, 2));

  // lance AddIntlString()
  AddIntlString(answers, appRootPath);
}
