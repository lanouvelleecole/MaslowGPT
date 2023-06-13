import I18n from "i18n-js";

/* PLOP_IMPORT_GetQtyKeysInObj */
import GetQtyKeysInObj from "../GetQtyKeysInObj/GetQtyKeysInObj.js";
/* PLOP_IMPORT_GetQtyKeysInObj */

import { GetChatGPTOutput } from "../GetChatGPTOutput/GetChatGPTOutput.js";
import { Delay } from "../Delay/Delay.js";
import { getDataFromNPMMaslowJSON } from "../GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

//Function to translate text in the specified language
// text is the text to translate
// language is the language to translate it in
// returns the translated text, or null if error
async function TranslateText({ text, language, apiKey }) {
  try {
    const jsonStringWithText = JSON.stringify({ text: `\`${text} \`` });

    //console.log(`input: ${jsonStringWithText}`);

    /*const outputJSONString = await GetChatGPTOutput({ model_chosen: getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
      prompt: `Translate to ${language} all the string properties of the following JSON object: ${jsonStringWithText}, and give me the translated object.`, //` . Format it like this: <txt_1><translation><txt_1> . `,
      apiKey,
    });*/

    const outputText = await GetChatGPTOutput({
      model_chosen:
        getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
      prompt: `Return this text, in ${language}: ${text}`, //` . Format it like this: <txt_1><translation><txt_1> . `,
      apiKey,
    });

    return outputText.trim();
  } catch (err) {
    return null;
  }
}

async function TranslateObject({
  obj,
  language,
  apiKey,
  doPrint = false,
  retries = 0,
}) {
  let newObj = {};
  let currentIndex = 1;
  let retriesCount = 1;
  let totalStrings = GetQtyKeysInObj(obj);
  doPrint ? console.log(I18n.t("x7CTz5XP")) : 42;

  try {
    for (var key in obj) {
      doPrint
        ? console.log(
            `\n(${currentIndex}/${totalStrings}):\n\n${I18n.t("xWtfTMu")}`
          )
        : 42;

      let translatedText = await TranslateText({
        text: obj[key],
        language,
        apiKey,
      });

      while (retriesCount <= retries && !translatedText) {
        doPrint
          ? console.log(I18n.t("x8H4nyVx") + ` ${retriesCount}/${retries}`)
          : 42;

        translatedText = await TranslateText({
          text: obj[key],
          language,
          apiKey,
        });

        await Delay(2000);

        retriesCount++;
      }

      if (!translatedText) {
        throw new Error(`Impossible de traduire ce string: ${obj[key]}`);
      }

      newObj[key] = translatedText;

      currentIndex++;

      doPrint ? console.log(`✅ ` + I18n.t("xlqZy0Sf")) : 42;
    }

    return newObj;
  } catch (err) {
    return null;
  }
}

export { TranslateText, TranslateObject };
