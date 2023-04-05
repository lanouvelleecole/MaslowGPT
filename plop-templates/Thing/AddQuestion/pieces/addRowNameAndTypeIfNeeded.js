function addRowNameAndTypeIfNeeded(
  databaseinfo_path_exists,
  rowTypeExists,
  databaseinfo_path,
  rowName,
  rowType,
  outputs
) {
  if (databaseinfo_path_exists && rowTypeExists) {
    const addRowNameAndType = {
      type: "append",
      path: `${process.cwd()}/${databaseinfo_path}`,
      pattern: `// PLOP_INJECT_DB_ROW`,
      template: `\t${rowName}: "${rowType}",`,
    };

    outputs.push(addRowNameAndType);
  }
}
export { addRowNameAndTypeIfNeeded };
