import I18n from "i18n-js";

import path from "path";
import { openVSCode } from "../../services/OpenVSCode/openVSCode.js";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { Constants } from "../../AppConstants/Constants.js";

function OpenFilesInVSCodeAndPrintMsg(answers, appRootPath) {
  // fileWhereWeUsePath est le path du fichier dans lequel on utilise
  // la chose. ou null, si "On veut rien, capiche" à été choisi par l'user
  const jsFileChoice = answers.ask_for_js_file;
  const actualJsFile = jsFileChoice != Constants.noChoice ? jsFileChoice : null;
  let fileWhereWeUsePath = actualJsFile;

  const inspiringMessage = answers.gold_caviar.inspiringMessage[0];
  const functionInstall = answers.gold_caviar.codeInstall[0];
  const subfolder = getPathWithForwardSlashes(
    path.join(answers.ask_for_subfolder, answers.name)
  );
  const regeneration_command = `${Constants.regeneration_command} ${subfolder}`;

  const partyMsg = `

${I18n.t("xGZ1dJ7M")}

${functionInstall}

${I18n.t("xjBxze0p")}

${regeneration_command}

${I18n.t("xBOoVhne")} 🌞

${inspiringMessage} 🌼

`;

  if (fileWhereWeUsePath) {
    fileWhereWeUsePath = path.join(appRootPath, fileWhereWeUsePath);
  }

  // funcFilePathFromAppRoot et funcFilePathFromC
  // sont les paths du fichier contenant la fonction créee
  const funcFilePathFromAppRoot = `${answers.ask_for_subfolder}/${answers.name}/${answers.name}.${answers.gold_caviar.codeExtension[0]}`;
  const funcFilePathFromC = path.join(appRootPath, funcFilePathFromAppRoot);

  const get_ai_service_language_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_language.txt`
  );

  const get_ai_service_args_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_args.txt`
  );

  const get_ai_service_description_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_description.txt`
  );

  const get_ai_service_return_value_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_return_value.txt`
  );

  // ouvre le folder souhaité avec les fichiers souhaités
  openVSCode({
    folderPath: appRootPath,
    filePaths: [
      funcFilePathFromC,
      fileWhereWeUsePath,
      get_ai_service_language_txt_path,
      get_ai_service_args_txt_path,
      get_ai_service_description_txt_path,
      get_ai_service_return_value_txt_path,
    ],
  });

  return partyMsg;
}
export { OpenFilesInVSCodeAndPrintMsg };
