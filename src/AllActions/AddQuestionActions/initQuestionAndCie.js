import { addPageImportsToQuestion } from './AddPageImportsToQuestion/addPageImportsToQuestion.js';
import { addPageLatestCurrentItem } from './AddPageLatestCurrentItem/addPageLatestCurrentItem.js';
import { addPageCurrentItemArg } from './AddPageCurrentItemArg/addPageCurrentItemArg.js';
import { addFrenchStrings } from './AddFrenchStrings/addFrenchStrings.js';
import { addEnglishStrings } from './AddEnglishStrings/addEnglishStrings.js';
import { addSqliteReduxDBData } from './AddSqliteReduxDBData/addSqliteReduxDBData.js';
import { addQuestionChoices } from './AddQuestionChoices/addQuestionChoices.js';
import { addQuestionToList } from './AddQuestionToList/addQuestionToList.js';

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
