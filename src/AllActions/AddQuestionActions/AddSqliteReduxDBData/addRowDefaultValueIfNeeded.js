function addRowDefaultValueIfNeeded(
  databaseinfo_path_exists,
  rowDefaultValueExists,
  databaseinfo_path,
  rowName,
  rowDefaultValue,
  outputs
) {
  if (databaseinfo_path_exists && rowDefaultValueExists) {
    const addRowDefaultValue = {
      type: "append",
      path: `${process.cwd()}/${databaseinfo_path}`,
      pattern: `// PLOP_INJECT_DEFAULT_STATE_VALUE`,
      template: `\t${rowName}: ${rowDefaultValue},`,
    };

    outputs.push(addRowDefaultValue);
  }
}
export { addRowDefaultValueIfNeeded };
