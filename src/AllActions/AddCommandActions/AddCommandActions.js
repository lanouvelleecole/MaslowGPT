import {
  AddElseIfForGeneratorIfNeeded,
  AddElseIfForNoPromptCMDIfNeeded,
  AddElseIfForPromptIfNeeded,
} from "./PLOPActions/AddElseIfForPromptIfNeeded/AddElseIfForPromptIfNeeded.js";
import { toCamelCase } from "../../services/ToPascalCase/ToPascalCase.js";
import { AppendCommandName } from "./PLOPActions/AppendCommandName/AppendCommandName.js";
import { createAddCommandFolder1 } from "./pieces/createAddCommandFolder1/createAddCommandFolder1.js";
import { createAddCommandFolder2 } from "./pieces/createTemplateFolder2/createAddCommandFolder2.js";
import { createAddCommandFolder3 } from "./pieces/createTemplateFolder3/createTemplateFolder3.js";
import { createAddCommandFolder4 } from "./pieces/createTemplateFolder4/createAddCommandFolder4.js";
import { createAddCommandFolder5 } from "./pieces/createTemplateFolder5/createAddCommandFolder5.js";
import { createAddCommandFolder6 } from "./pieces/createTemplateFolder6/createTemplateFolder6.js";
import { createAddCommandFolder7 } from "./pieces/createTemplateFolder7/createTemplateFolder7.js";
//import { createAddCommandFolder8 } from "./pieces/createAddCommandFolder8/createAddCommandFolder8.js";
//import { createAddCommandFolder9 } from "./pieces/createAddCommandFolder9/createAddCommandFolder9.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AddCommands, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AddCommandActions(promptData, appRootPath, plop) {
  // le dossier de tous les prompts de la commande,
  // dans src/AllPrompts
  const AddCommandFolder1 = createAddCommandFolder1(promptData);

  // O ou + de dossiers de prompts
  // individuels de cette commande,
  // a ajouter dans src/AllPrompts/<CmdName>/prompts/
  const AddCommandFolder2 = createAddCommandFolder2(promptData);

  // le dossier générateur pour cette commande, si besoin
  const AddCommandFolder3 = createAddCommandFolder3(promptData);

  // le dossier actions asynchrones pour cette commande
  const AddCommandFolder4 = createAddCommandFolder4(promptData);

  // le dossier actions PLOP pour cette commande
  const AddCommandFolder5 = createAddCommandFolder5(promptData);

  // O ou + de dossiers d'actions PLOP
  // individuels de cette commande,
  // a ajouter dans src/AllActions/<CmdNameCamel>/pieces/PLOPActions/
  const AddCommandFolder6 = createAddCommandFolder6(promptData);

  // si cette cmd a 0 prompts, ajoute dossier impromptu
  const AddCommandFolder7 = createAddCommandFolder7(promptData);

  const command_name = promptData["AddCommandName"];
  const command_name_camel = toCamelCase(command_name);

  const command_prompts = promptData["AddCommandPrompts"];

  let ElseIfPromptsShyt = AddElseIfForPromptIfNeeded({
    command_name,
    command_name_camel,
    command_prompts,
  });

  let ElseIfGeneratorShyt = AddElseIfForGeneratorIfNeeded({
    command_name,
    command_name_camel,
    command_prompts,
  });

  let ElseIfNoPromptCMDShyt = AddElseIfForNoPromptCMDIfNeeded({
    command_name,
    command_name_camel,
    command_prompts,
  });

  return [
    // le nom de la commande
    AppendCommandName(command_name),
    // le dossier de prompts de cette commande, dans src/AllPrompts
    ...AddCommandFolder1,
    // 0 ou + de prompts inquirer.js, pour cette commande
    // dans src/AllPrompts/<CmdNameCamel>/prompts/
    ...AddCommandFolder2,
    // l'import de l'aggrégateur de ces prompts,
    // dans src/AllGenerators/getPromptsGivenGeneratorName.js
    ElseIfPromptsShyt?.appendPromptsImport,
    // le else if de ces prompts,
    // dans src/AllGenerators/getPromptsGivenGeneratorName.js
    ElseIfPromptsShyt?.appendPromptsElseIf,
    // le nom de la commande dans la blacklist
    // de commandes sans prompts,
    // dans src/AllGenerators/getPromptsGivenGeneratorName.js
    ElseIfPromptsShyt?.appendNoPromptsCMDName,
    // l'import de générateur de cette commande,
    // dans src/AllGenerators/getPromptsGivenGeneratorName.js
    ElseIfGeneratorShyt?.appendGeneratorImport,
    // le else if de ces prompts,
    // dans src/AllGenerators/getPromptsGivenGeneratorName.js
    ElseIfGeneratorShyt?.appendGeneratorElseIf,
    // le générateur pour cette commande
    ...AddCommandFolder3,
    // les initialisateurs d'actions asynchrones pour cette commande
    ...AddCommandFolder4,
    // le dossier actions PLOP
    ...AddCommandFolder5,
    // O ou + de dossier d'actions PLOP individuelles
    ...AddCommandFolder6,
    // le dossier cmd sans prompt
    ...AddCommandFolder7,
    // else if/import du else-if de cette commande sans prompt
    ElseIfNoPromptCMDShyt?.appendNoPromptCMDElseIf,
    ElseIfNoPromptCMDShyt?.appendNoPromptCMDImport,
  ].filter((elm) => elm);
}

export { AddCommandActions };
