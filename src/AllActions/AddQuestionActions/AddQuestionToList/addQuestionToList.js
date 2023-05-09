function addQuestionToList(promptData, questionFolderPath, outputs) {
  const questionnaire_folder_path = promptData["questionnaire_folder_path"];
  const questionnaire_file_name = promptData["questionnaire_file_name"];

  const addimp = {
    type: "append",
    path: `${process.cwd()}/${questionnaire_folder_path}/${questionnaire_file_name}`,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import {
\t{{pascalCase question_name}}
} from "${questionFolderPath}/{{pascalCase question_name}}";`,
  };

  const addCall = {
    type: "append",
    path: `${process.cwd()}/${questionnaire_folder_path}/${questionnaire_file_name}`,
    pattern: `/* PLOP_INJECT_CODE */`,
    template: `\t\t{{pascalCase question_name}}(),`,
  };

  outputs.push(addimp, addCall);
}
export { addQuestionToList };
