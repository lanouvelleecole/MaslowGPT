import path from "path";

function createStringRepo(
  subfolder,
  properExtension,
  properFolderName,
  jsPath
) {
  return [
    {
      type: "add",

      // Path for the new file
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/{{pascalCase name}}.${properExtension}`,

      // Handlebars template used to generate content of new file
      templateFile: `plop-templates/hbs-files/${properFolderName}.${properExtension}.hbs`,
    },

    {
      type: "append",
      path: path.join(process.cwd(), jsPath),

      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      when: (data) => {
        return jsPath != null;
      },
      template: `import {
  {{pascalCase name}} from "${subfolder}/{{pascalCase name}}/{{pascalCase name}}";`,
    },
  ];
}

export { createStringRepo };
