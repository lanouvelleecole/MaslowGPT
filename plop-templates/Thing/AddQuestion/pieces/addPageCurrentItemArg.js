function addPageCurrentItemArg(promptData, questionFolderPath, outputs) {
  const questionPageName = promptData["question_page_name"];

  const conditionIsMet = questionPageName.length > 0;

  const plopAction = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}.js`,
    pattern: `// PLOP_INJECT_CURRENT_ITEM`,
    template: `
\t\t\t\tcurrentItem,`,
  };

  if (conditionIsMet) {
    outputs.push(plopAction);
  }
}
export { addPageCurrentItemArg };
