function initSingletonAndCie(actualJsFile, subfolder) {
  return [
    // ajoute import de Singleton
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {{pascalCase name}}Instance from "${subfolder}/{{pascalCase name}}";`,
      abortOnFail: false,
      when: (data) => {
        return actualJsFile != null;
      },
    },
  ];
}
export { initSingletonAndCie };
