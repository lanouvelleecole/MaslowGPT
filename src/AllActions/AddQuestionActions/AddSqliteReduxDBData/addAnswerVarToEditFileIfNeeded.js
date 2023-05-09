function addAnswerVarToEditFileIfNeeded(
  question_DB_edit_path_exists,
  rowNameExists,
  question_DB_edit_path,
  rowName,
  question_name,
  outputs
) {
  if (question_DB_edit_path_exists && rowNameExists) {
    const addRowVariable = {
      type: "append",
      path: `${process.cwd()}/${question_DB_edit_path}`,
      pattern: `/* PLOP_INJECT_ANSWER_VALUE */`,
      template: `\tconst ${rowName} = answers["${question_name}"].value;`,
    };

    outputs.push(addRowVariable);
  }
}
export { addAnswerVarToEditFileIfNeeded };
