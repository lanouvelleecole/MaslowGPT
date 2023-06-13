import I18n from "i18n-js";

import { Configuration, OpenAIApi } from "openai";
import { Constants } from "../../AppConstants/Constants.js";
import { GetPromptTokensLength } from "../GetPromptTokensLength/GetPromptTokensLength.js";

async function GetChatGPTOutput({
  model_chosen,
  prompt,
  onSuccess,
  onError,
  apiKey,
  params,
  print = true,
}) {
  try {
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const model_max_tok = Constants.modelsMaxTokens[model_chosen];

    const prompt_token_length = GetPromptTokensLength(prompt);
    const availableTokens = model_max_tok - prompt_token_length - 100;

    print ? console.log(I18n.t("xnPkyJUf") + ` ${model_chosen}`) : 42;
    print ? console.log(I18n.t("xJLDlRfb") + ` ${availableTokens}`) : 42;

    const outputText = await GetTextFromCompletion({
      openai,
      model_chosen,
      availableTokens,
      prompt,
      params,
    });

    if (outputText?.length > 0) {
      onSuccess ? onSuccess(outputText) : 42;

      return outputText;
    } else {
      throw new Error(`GPT completion Request failed`);
    }
  } catch (error) {
    if (error.response) {
      onError != null ? onError(error.response.data) : 42;
    } else {
      onError != null ? onError(error.message) : 42;
    }

    return null;
  }
}

async function GetTextFromCompletion({
  openai,
  model_chosen,
  availableTokens,
  prompt,
  params,
}) {
  if (Constants.completionModels.includes(model_chosen)) {
    return GetTextFromTextCompletion({
      openai,
      model_chosen,
      availableTokens,
      prompt,
      params,
    });
  } else if (Constants.chatModels.includes(model_chosen)) {
    return GetTextFromChatCompletion({
      openai,
      model_chosen,
      availableTokens,
      prompt,
      params,
    });
  } else {
    return null;
  }
}

async function GetTextFromChatCompletion({
  openai,
  model_chosen,
  availableTokens,
  prompt,
  params,
}) {
  const completion = await openai.createChatCompletion({
    model: model_chosen,
    max_tokens: availableTokens,
    messages: [{ role: "user", content: prompt }],
    ...params,
  });

  const outputText = completion?.data?.choices[0]?.message?.content;

  return outputText;
}

async function GetTextFromTextCompletion({
  openai,
  model_chosen,
  availableTokens,
  prompt,
  params,
}) {
  const completion = await openai.createCompletion({
    // https://platform.openai.com/docs/models/overview
    model: model_chosen,
    max_tokens: availableTokens,

    prompt: prompt,

    ...params,
  });

  const outputText = completion?.data?.choices[0]?.text;

  return outputText;
}

export { GetChatGPTOutput };
