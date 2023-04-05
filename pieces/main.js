import { getPromptsGivenGeneratorName } from "./getPromptsGivenGeneratorName.js";
import { RunActionsForGenerator } from "./RunActionsForGenerator.js";
import { generatorName, OPENAI_API_KEY } from "../index.js";
import path from "path";
import inquirer from "inquirer";
import nodePlop from "node-plop";
import { getNPMFolderRoot } from "../getNPMFolderRoot.js";
import { params, answers } from "../index.js";
import { PromptUser } from "./promptUser.js";
import { RegenerateAIFunction } from "../plop-templates/Thing/actions/RegenerateAIFunction/RegenerateAIFunction.js";

export async function main() {
  try {
    // si y'a pas de clé API dans les variables environnement,
    // alors c'est bobo hopitalo chocosto pépito
    crashIfYouArePoor();

    // le xxx de la commande maslow xxx
    const generatorName = process.argv[2];

    const prompts = getPromptsGivenGeneratorName();

    // si les conditions sont réunies pour le prompting,
    // alors let's prompt
    if (prompts?.length > 0) {
      let promptAnswers = await PromptUser(prompts);
      let actionsResult = await RunActionsForGenerator(
        promptAnswers,
        generatorName
      );

      console.log(`\nBravissimo !\n`);
    } else if (generatorName == "regen-ai-func") {
      // Si on veut recréer une fonction IA

      // le path Command line ou la commande maslow xxx à été exécuté
      const appRootPath = process.cwd();

      // le yyy de la commande maslow xxx yyy
      const funcPath = process.argv[3];

      // RE MAGIE, si y'a path
      if (funcPath?.length > 0) {
        await RegenerateAIFunction(appRootPath, funcPath);
      } else {
        console.log(`
Il faut fournir le path du dossier contenant la fonction à re-générer, comme ceci:

maslow regen-ai-func <path/vers/dossier/fonction>
`);
      }
    }
  } catch (e) {
    console.log(
      `\nUn problème est survenu durant la mission.... Réessaie, amigo ;-) !\n\n${e}`
    );
  }
}

function crashIfYouArePoor() {
  //console.log(`openai API key: ${OPENAI_API_KEY}`);

  if (OPENAI_API_KEY == null) {
    throw Error(`
Boss... Avant de commencer la fête, stocke une clé API OpenAI, 
dans une variable d'environnement, nommée OPENAI_API_KEY.
Ensuite ré-essaie cette commande.`);
  }
}
