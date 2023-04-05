import {
  askForStringName,
  askForStringFr,
  askForStringEng,
  askForRepoName,
  askForFile,
} from "./prompts/askForStringName.js";

export function getAddStringPrompts() {
  return [
    askForRepoName,
    askForStringName,
    askForStringFr,
    askForStringEng,
    askForFile,
  ];
}
