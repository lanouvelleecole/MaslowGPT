function addPageImportsToQuestion(promptData, questionFolderPath, outputs) {
  const questionPageName = promptData["question_page_name"];

  const conditionIsMet = questionPageName.length > 0;

  const plopAction = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}.js`,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `
import { 
  SqliteRedux{{pascalCase question_page_name}} 
} from "src/reduxState/{{pascalCase question_page_name}}/{{pascalCase question_page_name}}GetterSetter";
import { 
  SqliteRedux{{pascalCase question_page_name}}State 
} from "src/reduxState/{{pascalCase question_page_name}}State/{{pascalCase question_page_name}}StateGetterSetter";`,
  };

  if (conditionIsMet) {
    outputs.push(plopAction);
  }
}
export { addPageImportsToQuestion };
