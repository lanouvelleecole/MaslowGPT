import I18n from "i18n-js";

import { getGeneratePrompts } from "../AllPrompts/GetGeneratePrompts/getGeneratePrompts.js";
import { getAddStringPrompts } from "../AllPrompts/GetAddStringPrompts/getAddStringPrompts.js";
import { getAddDefaultAppTemplatePrompts } from "../AllPrompts/GetAddDefaultAppTemplatePrompts/getAddDefaultAppTemplatePrompts.js";
import { getAllQuestionPrompts } from "../AllPrompts/GetAllQuestionPrompts/getAllQuestionPrompts.js";
import { CommandNames } from "../AppConstants/CommandNames.js";
import { AddCommandPrompts } from "../AllPrompts/AddCommandPrompts/AddCommandPrompts.js";

// PLOP_ADD_PPTS_IMPORT_GIVN_GEN_NAME

/**
 *
 * @returns La liste de prompts inquirer.js, selon le générateur souhaité par l'utilisateur
 */
function getPromptsGivenGeneratorName() {
  // le path Command line ou la commande maslow xxx à été exécuté
  const appRootPath = process.cwd();

  // le xxx de la commande maslow xxx
  const generatorName = process.argv[2];

  if (generatorName == CommandNames.generate) {
    return getGeneratePrompts(appRootPath);
  } else if (generatorName == CommandNames.add_string) {
    return getAddStringPrompts(appRootPath);
  } else if (generatorName == CommandNames.add_default_app_template) {
    return getAddDefaultAppTemplatePrompts(appRootPath);
  } else if (generatorName == CommandNames.question) {
    return getAllQuestionPrompts(appRootPath);
  }
  // ADD_MASLOW_COMMAND_1 (commande avec prompt(s))
  //
  // Ici, rajoute la liste de prompt(s) de cette commande.
  //
  // 1) Dans <Root Appli>/src/AllPrompts/ ,
  // copie/colle, et Renomme TemplatePrompts en le nom
  // de la commande, en CamelCase.
  //
  // 2) Dans <Root Appli>/src/AllPrompts/<Command Name>/ ,
  // renomme templatePrompts en le nom
  // de la commande, en pascalCase.
  //
  // 3) Dans <Root Appli>/src/AllPrompts/<Command Name>/<Command Name>Prompts.js ,
  // ajoute les prompts dans l'array, ajoute les fichiers de prmpts,
  // préférablement crées dans un subfolder
  // <Root Appli>/src/AllPrompts/<Command Name>/prompts/
  //
  // 4) ajoute un
  //
  // else if (generatorName == CommandNames.<Command Name>) {
  //   return <Command Name>Prompts(appRootPath);
  // }
  //
  // au dessous de ce commentaire.
  // Bien sur, ajoute l'import correspondant.
  // PLOP_ADD_PPTS_GIVN_GEN_NAME
  else if (generatorName == CommandNames.add_command) {
    return AddCommandPrompts(appRootPath);
  }

  // ADD_MASLOW_COMMAND_1 (commande sans prompt(s))
  //
  // Ici, rajoute le nom de la commande sans prompt.
  // on retourne une liste vide,
  // de manière à ne pas avoir d'erreur, durant l'utilisation de PromptUser
  else if (
    [
      CommandNames.regen_ai_func,
      CommandNames.add_string_quick,
      CommandNames.install_everything,

      // PLOP_ADD_NO_PPTS_CMD_NAME
    ].includes(generatorName)
  ) {
    return [];
  } else if (generatorName == null) {
    /**
     * Tu as oublié le purpose, gourgandin
     */
    console.log(I18n.t("x7MiVrtQ"));

    return null;
  }
  // valeur extraterrestre
  else {
    console.log(`${I18n.t("xq1LWW61")} maslow ${generatorName}`);

    return null;
  }
}
export { getPromptsGivenGeneratorName };
