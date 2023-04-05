function addChoiceData(
  choiceName,
  choiceValue,
  choiceUIStringName,
  choiceUIStringFr,
  choiceUIStringEn,
  questionFolderPath,
  outputs
) {
  const choice = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE */`,
    template: `\t${choiceName}: ${choiceValue},`,
  };

  const choiceUIString = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE_UI */`,
    template: `\t${choiceName}: I18n.t("${choiceUIStringName}"),`,
  };

  const choiceCallback = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}Choices/{{pascalCase question_name}}Choices.js`,
    pattern: `/* PLOP_INJECT_CHOICE_ACTION */`,
    template: `\t${choiceName}: ({choice, answers, answer, answerIndex, currentItem}) => {},`,
  };

  outputs.push(choice, choiceUIString, choiceCallback);
}

export { addChoiceData };
