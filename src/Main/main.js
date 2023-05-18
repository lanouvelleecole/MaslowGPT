import I18n from "i18n-js";

// fournit la liste de prompts inquirer.js, selon commande maslow
import { getPromptsGivenGeneratorName } from "../AllGenerators/getPromptsGivenGeneratorName.js";

// le re-générateur de fonction I.A.
import { RegenerateAIFunctionCommand } from "../AllGenerators/RegenerateAIFunctionCommand/RegenerateAIFunctionCommand.js";

// le méchanisme de prompting (via CMD et editeur de code), puis actions selon prompts
import { PromptUserAndRunActions } from "./PromptUserAndRunActions/PromptUserAndRunActions.js";

// si il n'y a pas de clé API, ou de crédits dispo pour l'utilisateur, alors
// l'aventure s'arrête ici
import { crashIfYouArePoor } from "./CrashIfYouArePoor/crashIfYouArePoor.js";

// le générateur de string multilingue 'rapido pépito'
import { AddStringQuick } from "../AllGenerators/AddStringQuick/AddStringQuick.js";

// le générateur qui installe des choses nécéssaires au fonctionnement de maslow, si besoin
import { InstallEverythingNeeded } from "../AllGenerators/InstallEverythingNeeded/InstallEverythingNeeded.js";
import { CommandNames } from "../AppConstants/CommandNames.js";

// NO_PROMPT_IMPROMPTU_IMPORT

/**
 * Ici commence maslow. This is the alpha and the oméga.
 * The début and the fin. Capiche amigo ;-)
 *
 * A LIRE !!!:
 *
 * Pour toi, programmeur intrépide t'aventurant ici bas,
 * si tu souhaites ajouter une commande à maslow, suis les
 * commentaires
 *
 * // ADD_MASLOW_COMMAND_<0 ou +>
 *
 * disséminés dans le code source. Et suis les instructions qui t'aideront à ajouter
 * ce qu'il faut, là ou il faut.
 */
export async function main() {
  try {
    // si y'a pas de clé API dans les variables environnement,
    // alors c'est bobo hopitalo chocosto pépito
    crashIfYouArePoor();

    // le xxx de la commande maslow xxx
    const generatorName = process.argv[2];

    // la liste de prompts a afficher selon commande
    const prompts = getPromptsGivenGeneratorName();

    // si les conditions sont réunies pour le prompting,
    // alors let's prompt
    if (prompts?.length > 0) {
      await PromptUserAndRunActions(prompts, generatorName);
    }
    // ADD_MASLOW_COMMAND_5
    //
    // ... si ta commande n'utilise aucun, 0, nada wallou, de prompts,
    // Dans ce cas, dans src/AllGenerators, copie/colle et renomme
    // le dossier et fichiers TemplateImpromptuCommand,
    // en <command name pascal/camel>ImpromptuCommand comme d'hab,
    // et crée ton job, avec ou sans l'aide du boilerplate.
    // aussi, sous ce commentaire, ajoute un else if:
    /*

// la commande de .........
else if (generatorName == "<command name>") {
  await <command name pascal>ImpromptuCommand();
}

    */
    // NO_PROMPT_ELSE_IF

    // si on veut régénérer une fonction I.A. sans prompting
    else if (generatorName == CommandNames.regen_ai_func) {
      // Si on veut recréer une fonction IA
      await RegenerateAIFunctionCommand();
    }
    // si on veut ajouter string rapidement, sans prompting
    else if (generatorName == CommandNames.add_string_quick) {
      await AddStringQuick();
    }
    // si on veut installer touskilfaut
    else if (generatorName == CommandNames.install_everything) {
      await InstallEverythingNeeded();
    }

    // TODO_MSG_SUCCESS
    console.log(I18n.t("xdRfRmMN"));
  } catch (e) {
    // TODO_MSG_FAIL
    console.log(`\n${I18n.t("xPrJY8wG")} !\n\n${e}`);
  }
}
