import { AddQuotesAroundWord } from "../../../../services/AddQuotesAroundWord/AddQuotesAroundWord.js";
import {
  CreateIndividualActionFolder,
  CreateIndividualActionFolderAsync,
} from "./pieces/CreateIndividualActionFolder/CreateIndividualActionFolder.js";

/**
 *
 * args: promptData
 *
 * return .....
 *
 * This function .......
 */
function createAddCommandFolder6(promptData) {
  // eslint-disable-next-line no-unused-vars

  const command_actions_names_str = promptData["AddCommandActions"];
  let command_actions_names = [];

  let allActionsFolders = [];

  command_actions_names_str?.length > 0
    ? (command_actions_names = JSON.parse(
        `[${AddQuotesAroundWord(command_actions_names_str)}]`
      ))
    : 42;

  command_actions_names.reverse().forEach((cmd_action_name, index) => {
    allActionsFolders = [
      ...allActionsFolders,
      ...CreateIndividualActionFolder(promptData, cmd_action_name, index),
      ...CreateIndividualActionFolderAsync(promptData, cmd_action_name, index),
    ];

    return;
  });

  return allActionsFolders;
}

export { createAddCommandFolder6 };
