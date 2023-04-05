import { addPageImportsToQuestion } from "./addPageImportsToQuestion.js";
import { addPageLatestCurrentItem } from "./addPageLatestCurrentItem.js";
import { addPageCurrentItemArg } from "./addPageCurrentItemArg.js";
import { addQuestionToList } from "./addQuestionToList.js";
import { addFrenchStrings } from "./addFrenchStrings.js";
import { addEnglishStrings } from "./addEnglishStrings.js";
import { addQuestionChoices } from "./addQuestionChoices.js";
import { addSqliteReduxDBData } from "./addSqliteReduxDBData.js";

function initQuestionAndCie({ questionFolderPath, promptData }) {
  let outputs = [];

  // ajoute les imports de GetterSetter d'une page, si besoin
  addPageImportsToQuestion(promptData, questionFolderPath, outputs);
  addPageLatestCurrentItem(promptData, questionFolderPath, outputs);
  addPageCurrentItemArg(promptData, questionFolderPath, outputs);

  // ajoute le french stuff
  addFrenchStrings(promptData, questionFolderPath, outputs);

  // ajoute le engliche stuff
  addEnglishStrings(promptData, questionFolderPath, outputs);

  // ajoute les données de choix si besoin
  addQuestionChoices(promptData, questionFolderPath, outputs);

  // ajoute la question a la liste de questions
  addQuestionToList(promptData, questionFolderPath, outputs);

  // ajoute les données de crud liées à cette question, si besoin
  //
  // question_database_save_path, databaseinfo_path, row_data
  addSqliteReduxDBData(promptData, questionFolderPath, outputs);

  return outputs;
}

export { initQuestionAndCie };
