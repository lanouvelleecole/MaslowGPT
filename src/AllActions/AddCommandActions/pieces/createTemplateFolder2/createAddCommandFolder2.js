import { AddQuotesAroundWord } from "../../../../services/AddQuotesAroundWord/AddQuotesAroundWord.js";
import { CreateIndividualPromptFolder } from "./pieces/CreateIndividualPromptFolder/CreateIndividualPromptFolder.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function createAddCommandFolder2(promptData) {
  // eslint-disable-next-line no-unused-vars

  const command_prompts_names_str = promptData["AddCommandPrompts"];
  let command_prompts_names = [];

  let allPromptFolders = [];

  command_prompts_names_str?.length > 0
    ? (command_prompts_names = JSON.parse(
        `[${AddQuotesAroundWord(command_prompts_names_str)}]`
      ))
    : 42;

  command_prompts_names.forEach((cmd_prompt_name, index) => {
    allPromptFolders = [
      ...allPromptFolders,
      ...CreateIndividualPromptFolder(promptData, cmd_prompt_name, index),
    ];
  });

  return allPromptFolders;
}

export { createAddCommandFolder2 };
