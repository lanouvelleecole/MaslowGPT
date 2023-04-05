function addAnswerRowToEditFileIfNeeded(
  question_DB_edit_path_exists,
  rowNameExists,
  question_DB_edit_path,
  rowName,
  outputs
) {
  if (question_DB_edit_path_exists && rowNameExists) {
    const addRowVariable = {
      type: "append",
      path: `${process.cwd()}/${question_DB_edit_path}`,
      pattern: `/* PLOP_INJECT_VALUE_IN_DB */`,
      template: `\t\t${rowName},`,
    };

    outputs.push(addRowVariable);
  }
}
export { addAnswerRowToEditFileIfNeeded };
