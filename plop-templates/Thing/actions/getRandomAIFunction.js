import { OPENAI_API_KEY } from "../../../index.js";
import { Constants } from "../AddQuestion/pieces/Constants.js";
import { GetChatGPTFunction } from "./GetChatGPTFunction.js";

async function getRandomAIFunction() {
  const apiKey = OPENAI_API_KEY;
  const functionLanguage = "React Native (Javascript)";
  const functionName = "GetUUID";
  const putFunctionFolderIn = "src/services";
  const functionPurpose = `Donne un uuid d'une longueur souhaitée`;
  const functionArgs = `uuidLength (un nombre, la longueur de l'UUID)`;
  const functionReturnValue = `Un UUID de la longueur souhaitée. Utilise la librairie 'nanoid'`;

  await GetChatGPTFunction({
    functionName,
    functionLanguage,
    functionPurpose,
    functionArgs,
    functionReturnValue,
    putFunctionFolderIn,
    apiKey,
    printDebug: false,
  });

  console.log("Wazoo");
}
export { getRandomAIFunction };
