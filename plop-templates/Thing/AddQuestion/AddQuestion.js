import { AddQuestionActions } from "./pieces/AddQuestionActions.js";
import { getAllQuestionPrompts } from "./getAllQuestionPrompts.js";

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
