function addExportClauseInAllThingsIndexingFile(subfolder) {
  return {
    type: "append",
    path: `${process.cwd()}/${subfolder}/index.js`,
    pattern: `/* PLOP_INJECT_EXPORT */`,
    template: `\t{{pascalCase name}},`,
  };
}

export { addExportClauseInAllThingsIndexingFile };
