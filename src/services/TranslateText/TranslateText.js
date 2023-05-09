import I18n from "i18n-js";
import { GetChatGPTOutput } from "../GetChatGPTOutput/GetChatGPTOutput.js";
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

//Function to translate text in the specified language
// text is the text to translate
// language is the language to translate it in
// returns the translated text, or null if error
async function TranslateText({ text, language, apiKey }) {
  try {
    console.log(I18n.t("xWtfTMu"));

    const jsonStringWithText = JSON.stringify({ text: `\`${text} \`` });

    //console.log(`input: ${jsonStringWithText}`);

    const outputJSONString = await GetChatGPTOutput({
      prompt: `Translate to ${language} all the string properties of the following JSON object: ${jsonStringWithText}, and give me the translated object.`, //` . Format it like this: <txt_1><translation><txt_1> . `,
      apiKey,
    });

    //console.log(`output: ${outputJSONString}`);

    const outputJSON = JSON.parse(outputJSONString);

    return outputJSON.text;
  } catch (err) {
    return null;
  }
}

export { TranslateText };
