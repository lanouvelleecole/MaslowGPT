function initWorkPatternAndCie(actualJsFile, subfolder) {
  return [
    // ajoute import de WorkPattern
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {{pascalCase name}}Instance from "${subfolder}/{{pascalCase name}}";`,
      abortOnFail: false,
    },
  ];
}
export { initWorkPatternAndCie };
