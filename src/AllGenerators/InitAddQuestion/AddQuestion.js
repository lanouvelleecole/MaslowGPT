import { AddQuestionActions } from '../../AllActions/AddQuestionActions/AddQuestionActions.js';
import { getAllQuestionPrompts } from '../../AllPrompts/GetAllQuestionPrompts/getAllQuestionPrompts.js';

/**
 *
 * @param {*} plop
 * @param {*} appRootPath
 *
 *
 */
function initAddQuestion(plop, appRootPath) {
  plop.setGenerator("question", {
    description: "Creates a question.",

    prompts: getAllQuestionPrompts(appRootPath),
    actions: function (data) {
      return AddQuestionActions(appRootPath, data);
    },
  });
}

export { initAddQuestion };
