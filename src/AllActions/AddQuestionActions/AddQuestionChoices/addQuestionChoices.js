import { getChoicesDataAndCallbacks } from './getChoicesDataAndCallbacks.js';

function addQuestionChoices(promptData, questionFolderPath, outputs) {
  // 4 long strings
  const choicesDatas = getChoicesDataAndCallbacks(promptData);

  const choice = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE */`,
    template: choicesDatas.choices,
  };

  const choiceUIString = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE_UI */`,
    template: choicesDatas.choices_ui,
  };

  const choiceAction = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE_ACTION */`,
    template: choicesDatas.choices_callbacks,
  };

  const choiceCallback = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/Callbacks/{{pascalCase question_name}}ChoicesCallbacks.js`,
    pattern: `/* PLOP_INJECT_CHOICE_CALLBACK */`,
    template: choicesDatas.choices_callbacks_simple,
  };

  outputs.push(choice, choiceUIString, choiceAction, choiceCallback);
}

export { addQuestionChoices };
