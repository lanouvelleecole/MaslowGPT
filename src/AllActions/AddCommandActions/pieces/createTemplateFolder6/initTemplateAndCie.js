function initTemplateAndCie({
  command_action_name_camel,
  command_name_camel,
  creationFolderFromAppRoot,
  promptData,
}) {
  const actionFilePathFromAppRoot = `src/AllActions/${command_name_camel}/${command_name_camel}Actions.js`;
  const asyncActionFilePathFromAppRoot = `src/AllGenerators/Set${command_name_camel}AsyncActions/Set${command_name_camel}AsyncActions.js`;

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

  const action_import_line_async = {
    type: "append",
    path: `${process.cwd()}/${asyncActionFilePathFromAppRoot}`,

    pattern: `// PLOP_ASYNC_ACTION_IMPORT`,
    template: `import { ${command_action_name_camel} } from "./${command_action_name_camel}/${command_action_name_camel}.js";`,
  };

  const action_use_line_async = {
    type: "append",
    path: `${process.cwd()}/${asyncActionFilePathFromAppRoot}`,

    pattern: `// PLOP_ASYNC_ACTION_USE`,
    template: `\t${command_action_name_camel}(plop, appRootPath);`,
  };

  return [
    action_import_line,
    action_use_line,
    action_import_line_async,
    action_use_line_async,
  ];
}

export { initTemplateAndCie };
