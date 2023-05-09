#!/usr/bin/env node

// le répertoire à strings multilingue
import { AppStrings } from "./src/AppStrings/AppStrings.js";

// le début des festivités
import { main } from "./src/Main/main.js";

// permet d'obtenir la mémoire des dernières commandes exécutées
import { getNPMMaslowJSON } from "./src/services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

// permet de récup le texte copié via ctrl+c auparavant
import { GetCopiedTxt } from "./src/services/GetCopiedTxt/GetCopiedTxt.js";

/**
 *
 * Maslow
 *
 * Crée par:
 *
 * DONAT Jean Louis (ze king),
 * DONAT Luc (ze king 2)
 *
 * Ce programme est un humble magicien qui nous facilite la vie de programmeur,
 * en automatisant des trucs répétitifs, et nous permet de se concentrer sur l'essentiel, notre vision.
 */

// init de strings multilingue
AppStrings();

// des données utiles aux choses, notamment l'index du prompt en cours de consultage, dans la liste de prompts.
let params = { currentQuestionIndex: 0, copiedStr: GetCopiedTxt() };

// les réponses actuelles aux prompts
// (global bby)
let answers = getNPMMaslowJSON() ?? {};

// la clé API OpenAI (stockée dans une variable d'environnement)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// le xxx de maslow xxx
const generatorName = process.argv[2];

// un second arg si besoin
// le yyy de maslow xxx yyy
// (d'autres peuvent être crées a l'infini)
const second_cmd_arg = process.argv[3];

// c'est ici que tout commence
// l'alpha et l'oméga
// le point d'entrée, ze singularity.
(async function () {
  await main();
})();

// j'exporte ici les variables/ constantes globales
// qui servent un peu partout dans ce petit utilitaire humble
export { params, answers, generatorName, second_cmd_arg, OPENAI_API_KEY };
