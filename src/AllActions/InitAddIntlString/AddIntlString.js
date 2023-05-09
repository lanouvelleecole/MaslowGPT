import ReplaceCopiedTextInFile from "../../services/ReplaceCopiedTextInFile/ReplaceCopiedTextInFile.js";
import { params, second_cmd_arg } from "../../../index.js";
import { SetCopiedText } from "../../services/SetCopiedText/SetCopiedText.js";
import { Constants } from "../../AppConstants/Constants.js";
import { getPathWithForwardSlashes } from "../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { InjectStuffUnderPatterns } from "../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";

export function AddIntlString(data, appRootPath) {
  const string_name = data["string_name"];
  const string_fr = data["string_fr"];
  const string_eng = data["string_eng"];
  const ask_for_js_file_string = data["ask_for_js_file_string"];

  AddStringUseToFileIfNeeded(ask_for_js_file_string, appRootPath, string_name);

  SetCopiedText(`I18n.t('${string_name}')`);

  AddStringToRepository(appRootPath, data, string_name, string_eng, string_fr);

  return [];
}

function AddStringToRepository(
  appRootPath,
  data,
  string_name,
  string_eng,
  string_fr
) {
  InjectStuffUnderPatterns(
    `${appRootPath}/${data.string_repo_folder_path}/${data.string_repo_file_path}`,
    [
      {
        pattern: `/* PLOP_INJECT_ENG_STRING */`,
        stuffUnderPattern: `${string_name}: \`${string_eng}\`,`,
        deletePreviousStuff: false,
        indent: Constants.only_first,
      },
      {
        pattern: `/* PLOP_INJECT_FR_STRING */`,
        stuffUnderPattern: `${string_name}: \`${string_fr}\`,`,
        deletePreviousStuff: false,
        indent: Constants.only_first,
      },
    ]
  );
}

function AddStringUseToFileIfNeeded(
  ask_for_js_file_string,
  appRootPath,
  string_name
) {
  const weRunFromIDE = second_cmd_arg != null;

  if (ask_for_js_file_string != Constants.noChoice && !weRunFromIDE) {
    AddIntlStringFromCMD(appRootPath, ask_for_js_file_string, string_name);
  } else if (weRunFromIDE) {
    AddIntlStringFromIDE(appRootPath, string_name);
  }
}

function AddIntlStringFromCMD(
  appRootPath,
  ask_for_js_file_string,
  string_name
) {
  ReplaceCopiedTextInFile(
    `${appRootPath}/${ask_for_js_file_string}`,
    params.copiedStr,
    `I18n.t('${string_name}')`
  );

  InjectStuffUnderPatterns(`${appRootPath}/${ask_for_js_file_string}`, [
    {
      addOnTop: true,
      stuffUnderPattern: `import I18n from "i18n-js";`,
      deletePreviousIdenticalLine: true,
      indent: false,
    },
  ]);
}

function AddIntlStringFromIDE(appRootPath, string_name) {
  ReplaceCopiedTextInFile(
    getPathWithForwardSlashes(second_cmd_arg),
    params.copiedStr,
    `I18n.t('${string_name}')`
  );

  InjectStuffUnderPatterns(getPathWithForwardSlashes(second_cmd_arg), [
    {
      addOnTop: true,
      stuffUnderPattern: `import I18n from "i18n-js";`,
      deletePreviousIdenticalLine: true,
      indent: false,
    },
  ]);
}
