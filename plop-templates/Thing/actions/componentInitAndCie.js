function componentInitAndCie({ actualJsFile, subfolder }) {
  return [
    // import pour utiliser ce component
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,

      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
\t{{pascalCase name}}
} from "${subfolder}/{{pascalCase name}}/{{pascalCase name}}";`,
      abortOnFail: true,
      when: (data) => {
        return actualJsFile != null;
      },
    },
  ];
}
export { componentInitAndCie };
