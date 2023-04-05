import { userChoices } from "../prompts/askWhatUserWants";

function createThingIndexingFile(subfolder, what_we_wanna_do) {
  if (
    [
      userChoices.createComponent,
      userChoices.createPage,
      userChoices.createService,
      userChoices.createStringRepo,
    ].includes(what_we_wanna_do)
  ) {
    return [
      {
        type: "add",
        path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/index.js`,
        templateFile: "plop-templates/hbs-files/index.js.hbs",
      },
    ];
  } else {
    return [];
  }
}

export { createThingIndexingFile };
