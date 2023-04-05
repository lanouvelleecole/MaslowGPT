function createQuestion(subfolder, actualJsFile, promptData) {
  return [
    {
      type: "add",
      path: `${process.cwd()}/${subfolder}/Questions/{{pascalCase name}}.js`,
      templateFile: `plop-templates/hbs-files/Question.js.hbs`,
    },

    // ajoute la question dans la liste de question
    // (import)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/QuestionList.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  {{pascalCase name}}
} from '${subfolder}/Questions/{{pascalCase name}}';`,
    },

    // ajoute la question dans la liste de question
    // (question in list)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/QuestionList.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}(),`,
    },
  ];
}
export { createQuestion };
