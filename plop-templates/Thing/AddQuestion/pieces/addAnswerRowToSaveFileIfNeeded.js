function addAnswerRowToSaveFileIfNeeded(
  question_DB_save_path_exists,
  rowNameExists,
  question_DB_save_path,
  rowName,
  outputs
) {
  if (question_DB_save_path_exists && rowNameExists) {
    const addRowVariable = {
      type: "append",
      path: `${process.cwd()}/${question_DB_save_path}`,
      pattern: `/* PLOP_INJECT_VALUE_IN_DB */`,
      template: `\t\t${rowName},`,
    };

    outputs.push(addRowVariable);
  }
}
export { addAnswerRowToSaveFileIfNeeded };
