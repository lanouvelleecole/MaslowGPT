import {
  GetAllLanguagesCodesPath,
  GetAllLanguagesPath,
} from "./GetAllLanguagesPath/GetAllLanguagesPath.js";
import { OPENAI_API_KEY } from "../../../../../index.js";
import { CreateFileFromScratch } from "../../../../services/CreateFileFromScratch/CreateFileFromScratch.js";
import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { GetFileContentsIfExisting } from "../../../../services/GetFileContentsIfExisting/GetFileContentsIfExisting.js";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { InjectStuffUnderPatterns } from "../../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";
import { TranslateObjectIntl } from "../../../../services/TranslateObjectIntl/TranslateObjectIntl.js";
import { TranslateObject } from "../../../../services/TranslateText/TranslateText.js";
import path from "path";
import { ReadJSONFile } from "../../../../services/ReadJSONFile/ReadJSONFile.js";

async function TranslateSrcRequest(answers, appRootPath, printMsg = true) {
  try {
    //

    const allLanguagesCodesPath = GetAllLanguagesCodesPath();
    const AppStringsFullPath = path.join(appRootPath, answers.ChooseAppStrings);

    const chosenLanguage = answers.ChooseLanguage;
    const translatedObj = await TranslateObject({
      obj: answers.srcObj,
      language: chosenLanguage,
      apiKey: OPENAI_API_KEY,
      doPrint: true,
      retries: 15,
    });

    const language_tag_obj = ReadJSONFile(allLanguagesCodesPath);
    const language_tag = language_tag_obj[chosenLanguage];
    const language_tag_formatted = language_tag.replace(/-/g, "_");

    if (translatedObj) {
      // crée fichier path.join(process.cwd(), path.dirname(answers.ChooseAppStrings), "translations", `strings_${translatedObj.country}.js`)
      // et stocke translatedObj dedans
      let languageFilePath = path.join(
        process.cwd(),
        path.dirname(answers.ChooseAppStrings),
        "translations",
        `strings_${language_tag_formatted}.js`
      );
      CreateFileFromScratch(
        languageFilePath,
        `
const strings_${language_tag_formatted} = ${JSON.stringify(
          translatedObj,
          null,
          2
        )}
        
export { strings_${language_tag_formatted} };`
      );

      // ajoute `import { strings_${translatedObj.country} } from "./translations/strings_${translatedObj.country}.js";`
      // dans answers.ChooseAppStrings
      InjectStuffUnderPatterns(getPathWithForwardSlashes(AppStringsFullPath), [
        {
          addOnTop: true,
          stuffUnderPattern: `import { strings_${language_tag_formatted} } from "./translations/strings_${language_tag_formatted}.js";`,
          deletePreviousIdenticalLine: true,
          indent: false,
        },
      ]);

      // ajoute `${translatedObj.country}: strings_${translatedObj.country},`
      // dans l'objet i18n.translations situé dans answers.ChooseAppStrings
      InjectStuffUnderPatterns(getPathWithForwardSlashes(AppStringsFullPath), [
        {
          pattern: `/* PLOP_INJECT_INTL_STRINGS */`,
          stuffUnderPattern: `"${language_tag}": strings_${language_tag_formatted},`,
          deletePreviousIdenticalLine: true,
          indent: true,
        },
      ]);
    }
  } catch (error) {
    throw new Error(`Failed to get Chat GPT output: ${error}`);
  }
}
export { TranslateSrcRequest };
