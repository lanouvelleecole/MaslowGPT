import { RunActionsForGenerator } from "./RunActionsForGenerator.js";
import { PromptUser } from "./promptUser.js";

export async function PromptUserAndRunActions(prompts, generatorName) {
  let promptAnswers = await PromptUser(prompts);

  await RunActionsForGenerator(promptAnswers, generatorName);
}
