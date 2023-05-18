/**
 *
 * args: command_name
 *
 * return .....
 *
 * This function .......
 */
function AppendCommandName(command_name) {
  return {
    type: "append",
    path: `${process.cwd()}/src/AppConstants/CommandNames.js`,

    pattern: `// ADD_CMD_NAME`,
    template: `\t${command_name.replace(/-/g, "_")}: "${command_name}",`,
  };
}

export { AppendCommandName };
