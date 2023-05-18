import {
  AddCommandActionsText,
  AddCommandNameText,
  AddCommandPromptsText,
} from "./prompts/AddCommandName/AddCommandName.js";

export function AddCommandPrompts(appRootPath) {
  return [
    AddCommandNameText(appRootPath),
    AddCommandPromptsText(appRootPath),
    AddCommandActionsText(appRootPath),
  ];
}
