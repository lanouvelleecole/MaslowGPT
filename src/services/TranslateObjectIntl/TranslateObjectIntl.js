/* PLOP_INJECT_IMPORT */

// permet du state local
// eslint-disable-next-line no-unused-vars

// styles de base
// eslint-disable-next-line no-unused-vars
import { OPENAI_API_KEY } from "../../../index.js";
import { GetChatGPTOutput } from "../GetChatGPTOutput/GetChatGPTOutput.js";
import { getDataFromNPMMaslowJSON } from "../GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";
import { TranslateObject } from "../TranslateText/TranslateText.js";

/**
 *
 * un service/component
 *
 */
const TranslateObjectIntl = async ({ obj, languages, apiKey }) => {
  /* PLOP_INJECT_CODE */
  let allTranslationsOrder = [];
  let allTranslationsObj = {};

  for (var i = 0; i < languages.length; i++) {
    const language = languages[i];
    const translatedObj = await TranslateObject({
      apiKey,
      obj,
      language,
      //notabene: `The obj.country property must be the "ETF BCP 47 language tag" for ${language}`,
    });
    const language_tag = await GetChatGPTOutput({
      model_chosen:
        getDataFromNPMMaslowJSON("ChooseAIModel") ?? "text-davinci-003",
      prompt: `Return the BCP 47 language tag for this language: ${language}`,
      onSuccess: (chatGPTOutput) => {},
      onError: (error) => {},
      apiKey: OPENAI_API_KEY,
    });

    allTranslationsObj[language_tag] = translatedObj;
    allTranslationsOrder.push(language_tag);
  }

  return { allTranslationsOrder, allTranslationsObj };
};

export { TranslateObjectIntl };
