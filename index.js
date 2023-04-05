#!/usr/bin/env node

import { main } from "./pieces/main.js";

/**
 *
 * Maslow Babiiiiiiiie !!!!
 *
 * $$$$$$$$$$$$$$$$$$$$$$$$
 *
 * Ce programme est un magicien qui nous facilite la vie de programmeur,
 * en automatisant des trucs répétitifs, et nous permet de se concentrer sur l'essentiel, notre vision.
 */

// des données utiles aux choses, notamment l'index du prompt en cours de consultage, dans la liste de prompts.
let params = { currentQuestionIndex: 0 };

// les réponses actuelles aux prompts
// (global bby)
let answers = {};

// la clé API OpenAI (stockée dans une variable d'environnement)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// le xxx de maslow xxx
const generatorName = process.argv[2];

// un second arg si besoin
// (d'autres peuvent être crées a l'infini)
const second_cmd_arg = process.argv[3];

// c'est ici que tout commence
// l'alpha et l'oméga
// le point d'entrée, ze singularity.
(async function () {
  await main();
})();

export { params, answers, generatorName, OPENAI_API_KEY };
