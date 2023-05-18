function initTemplateAndCie({
  command_action_name_camel,
  command_name_camel,
  creationFolderFromAppRoot,
  promptData,
}) {
  const actionFilePathFromAppRoot = `src/AllActions/${command_name_camel}/${command_name_camel}Actions.js`;
  const action_import_line = {
    type: "append",
    path: `${process.cwd()}/${actionFilePathFromAppRoot}`,

    pattern: `// PLOP_IMPORT_ACTION`,
    template: `import * as ${command_action_name_camel}Action from "./pieces/PLOPActions/${command_action_name_camel}/${command_action_name_camel}Actions.js";`,
  };

  const action_use_line = {
    type: "append",
    path: `${process.cwd()}/${actionFilePathFromAppRoot}`,

    pattern: `// PLOP_IMPORT_ACTION_USE`,
    template: `\t\t//${command_action_name_camel}Action.${command_action_name_camel}AppendAction(promptData, appRootPath),`,
  };

  return [action_import_line, action_use_line];
}

export { initTemplateAndCie };
