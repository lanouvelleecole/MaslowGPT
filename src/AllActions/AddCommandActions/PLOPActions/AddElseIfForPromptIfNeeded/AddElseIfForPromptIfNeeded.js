import path from "path";
import { getPathWithForwardSlashes } from "../../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";

/**
 *
 * args: appendPromptsElseIf, command_name, command_name_camel, appendPromptsImport
 *
 * return .....
 *
 * This function .......
 */
function AddElseIfForPromptIfNeeded({
  command_name,
  command_name_camel,
  command_prompts,
}) {
  if (command_prompts?.length > 0) {
    const appendPromptsElseIf = {
      type: "append",
      path: `${process.cwd()}/src/AllGenerators/getPromptsGivenGeneratorName.js`,

      template: `  else if (generatorName == CommandNames.${command_name.replace(
        /-/g,
        "_"
      )}) {
    return ${command_name_camel}Prompts(appRootPath);
  }`,
      pattern: `// PLOP_ADD_PPTS_GIVN_GEN_NAME`,
    };

    const appendPromptsImport = {
      type: "append",
      path: `${process.cwd()}/src/AllGenerators/getPromptsGivenGeneratorName.js`,

      template: `import { ${command_name_camel}Prompts } from '../AllPrompts/${command_name_camel}/${command_name_camel}Prompts.js';`,
      pattern: `// PLOP_ADD_PPTS_IMPORT_GIVN_GEN_NAME`,
    };

    return { appendPromptsElseIf, appendPromptsImport };
  } else {
    const appendNoPromptsCMDName = {
      type: "append",
      path: `${process.cwd()}/src/AllGenerators/getPromptsGivenGeneratorName.js`,

      template: `\t\t\tCommandNames.${command_name.replace(/-/g, "_")},`,
      pattern: `// PLOP_ADD_NO_PPTS_CMD_NAME`,
    };
    return { appendNoPromptsCMDName };
  }
}

function AddElseIfForGeneratorIfNeeded({
  command_name,
  command_name_camel,
  command_prompts,
}) {
  if (command_prompts?.length > 0) {
    const appendGeneratorElseIf = {
      type: "append",
      path: `${process.cwd()}/src/AllGenerators/InitAllGenerators/initAllGenerators.js`,

      template: `  else if (generatorName == CommandNames.${command_name.replace(
        /-/g,
        "_"
      )}) {
    init${command_name_camel}Generator(plop, appRootPath);

    Set${command_name_camel}AsyncActions(plop, appRootPath);
  }`,
      pattern: `// PLOP_INJECT_GENERATOR_ELSE_IF`,
    };

    const appendGeneratorImport = {
      type: "append",
      path: `${process.cwd()}/src/AllGenerators/InitAllGenerators/initAllGenerators.js`,

      template: `
import { init${command_name_camel}Generator } from "../${command_name_camel}/init${command_name_camel}Generator.js";
import { Set${command_name_camel}AsyncActions } from "../Set${command_name_camel}AsyncActions/Set${command_name_camel}AsyncActions.js";
`,
      pattern: `// PLOP_INJECT_GENERATOR_IMPORTS`,
    };

    return {
      appendGeneratorElseIf,
      appendGeneratorImport,
    };
  } else {
    return;
  }
}

function AddElseIfForNoPromptCMDIfNeeded({
  command_name,
  command_name_camel,
  command_prompts,
}) {
  if (!command_prompts || command_prompts?.length == 0) {
    const appendNoPromptCMDElseIf = {
      type: "append",
      path: getPathWithForwardSlashes(
        path.join(process.cwd(), "/src/Main/main.js")
      ),

      template: `  else if (generatorName == CommandNames.${command_name.replace(
        /-/g,
        "_"
      )}) {
    await ${command_name_camel}ImpromptuCommand();
  }`,
      pattern: `// NO_PROMPT_ELSE_IF`,
    };

    const appendNoPromptCMDImport = {
      type: "append",
      path: getPathWithForwardSlashes(
        path.join(process.cwd(), "/src/Main/main.js")
      ),

      template: `
import { ${command_name_camel}ImpromptuCommand } from "../AllGenerators/${command_name_camel}ImpromptuCommand/${command_name_camel}ImpromptuCommand.js";
`,
      pattern: `// NO_PROMPT_IMPROMPTU_IMPORT`,
    };

    return {
      appendNoPromptCMDElseIf,
      appendNoPromptCMDImport,
    };
  } else {
    return;
  }
}

export {
  AddElseIfForPromptIfNeeded,
  AddElseIfForGeneratorIfNeeded,
  AddElseIfForNoPromptCMDIfNeeded,
};
