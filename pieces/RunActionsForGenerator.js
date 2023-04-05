import nodePlop from "node-plop";
import path from "path";
import { getNPMFolderRoot } from "../getNPMFolderRoot.js";

/**
 *
 * @param {*} answers, résultat de prompting
 * @param {*} generatorName, nom du générateur (xxx de maslow xxx)
 *
 * @returns le résultat de l'exécution d'actions du générateur generatorName
 *
 * Allez, au boulot !
 */
export async function RunActionsForGenerator(answers, generatorName) {
  // load an instance of plop from a plopfile
  const plopfilePath = path.join(getNPMFolderRoot(), `plopfile.js`);
  const plop = await nodePlop(plopfilePath);

  // get a generator by name
  const generator = plop.getGenerator(generatorName);

  // run all the generator actions using the data specified
  return generator.runActions(answers);
}
