import { Configuration, OpenAIApi } from "openai";

async function GetChatGPTOutput({
  prompt,
  onSuccess,
  onError,
  apiKey,
  params,
}) {
  try {
    const configuration = new Configuration({
      apiKey: apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
      // https://platform.openai.com/docs/models/overview
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 2048,

      ...params,
    });

    const outputText = completion?.data?.choices[0]?.text;

    onSuccess != null ? onSuccess(outputText) : 42;

    return outputText;
  } catch (error) {
    if (error.response) {
      onError != null ? onError(error.response.data) : 42;
    } else {
      onError != null ? onError(error.message) : 42;
    }

    return null;
  }
}

export { GetChatGPTOutput };
