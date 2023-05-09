function initDoWorkAndCie(actualJsFile, subfolder) {
  return [
    // ajoute import de DoWork
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  {{pascalCase name}} 
} from "${subfolder}/{{pascalCase name}}/{{pascalCase name}}";`,
      abortOnFail: false,
      when: (data) => {
        return actualJsFile != null;
      },
    },
  ];
}
export { initDoWorkAndCie };
