function createStringRepo(
  subfolder,
  properExtension,
  properFolderName,
  jsPath
) {
  return [
    // crée le fichier AppStrings.js
    {
      type: "add",

      // Path for the new file
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/{{pascalCase name}}.${properExtension}`,

      // Handlebars template used to generate content of new file
      templateFile: `plop-templates/hbs-files/${properFolderName}.${properExtension}.hbs`,
    },
  ];
}

export { createStringRepo };
