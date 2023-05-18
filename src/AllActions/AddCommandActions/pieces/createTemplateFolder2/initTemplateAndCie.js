function initTemplateAndCie({
  command_prompt_name_camel,
  command_name_camel,
  creationFolderFromAppRoot,
  promptData,
}) {
  const promptFilePathFromAppRoot = `src/AllPrompts/${command_name_camel}/${command_name_camel}Prompts.js`;
  const prompt_import_line = {
    type: "append",
    path: `${process.cwd()}/${promptFilePathFromAppRoot}`,

    pattern: `// PLOP_IMPORT_PROMPT`,
    template: `import { ${command_prompt_name_camel}PromptText } from "./prompts/${command_prompt_name_camel}/${command_prompt_name_camel}PromptText.js";`,
  };

  const prompt_use_line = {
    type: "append",
    path: `${process.cwd()}/${promptFilePathFromAppRoot}`,

    pattern: `// PLOP_IMPORT_PROMPT_USE`,
    template: `\t\t${command_prompt_name_camel}PromptText(appRootPath),`,
  };

  return [prompt_import_line, prompt_use_line];
}

export { initTemplateAndCie };
