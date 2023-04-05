import path from "path";
import inquirer from "inquirer";
import nodePlop from "node-plop";
import { getNPMFolderRoot } from "../getNPMFolderRoot.js";
import { params, answers } from "../index.js";

export async function PromptUser(prompts) {
  let currentIndex = 0;
  let previousIndex = null;

  /*prompts = prompts.map((prompt, index) => {
    if (index > 0 && prompt.type == "input") {
      prompt.message += `\nASTUCE: Ecris "<" pour retourner en arrière.\n\n`;

      return prompt;
    } else if (index > 0 && prompt.type == "list") {
      prompt.message += `\nASTUCE: Choisis "<" pour retourner en arrière.\n\n`;

      return prompt;
    } else {
      return prompt;
    }
  });
  */

  while (currentIndex < prompts.length) {
    const prompt = prompts[currentIndex];

    /*if (previousIndex !== null) {
      prompt.message += ` (Type "<" to go back to ${prompts[previousIndex].name})`;
    }*/

    const currentAnswers = await inquirer.prompt(prompt);
    const currentAnswerValue = currentAnswers[prompt.name];

    if (currentAnswerValue === "<") {
      currentIndex = previousIndex;
      previousIndex = currentIndex === 0 ? null : currentIndex - 1;
    } else {
      answers[prompt.name] = currentAnswerValue;

      previousIndex = currentIndex;
      currentIndex++;
    }
  }

  return answers;
}
