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
    template: `
import * as ${command_prompt_name_camel}PromptText from "./prompts/${command_prompt_name_camel}/${command_prompt_name_camel}PromptText.js";
import * as ${command_prompt_name_camel}PromptChoice from "./prompts/${command_prompt_name_camel}/${command_prompt_name_camel}PromptChoice.js";
`,
  };

  const prompt_use_line = {
    type: "append",
    path: `${process.cwd()}/${promptFilePathFromAppRoot}`,

    pattern: `// PLOP_IMPORT_PROMPT_USE`,
    template: `
\t\t${command_prompt_name_camel}PromptText.${command_prompt_name_camel}PromptText(appRootPath),
\t\t//${command_prompt_name_camel}PromptChoice.${command_prompt_name_camel}PromptChoices(appRootPath),`,
  };

  return [prompt_import_line, prompt_use_line];
}

export { initTemplateAndCie };
