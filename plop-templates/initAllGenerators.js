import { initThingGenerator } from "./Thing/initThingGenerator.js";

/**/

import { initAddIntlString } from "./Thing/initAddIntlString.js";
import { initAddDefaultTemplate } from "./Thing/initAddDefaultTemplate.js";
import { initAddQuestion } from "./Thing/AddQuestion/AddQuestion.js";

/**/

import { setAsynchronousActions } from "./Thing/actions/setAsynchronousActions.js";
import path from "path";

function initAllGenerators(plop) {
  // le path Command line ou la commande maslow xxx à été exécuté
  const appRootPath = process.cwd();

  // le xxx de la commande maslow xxx
  const generatorName = process.argv[2];

  //console.log(`Running generator: ${generatorName}`);
  //console.log(`app root path: ${appRootPath}`);

  /**
   * ce code ci dessous initialise le générateur
   * permettant de générer
   * un component, une page, un service,
   * ou un repo string
   */
  if (generatorName == "generate") {
    initThingGenerator(plop, appRootPath);

    /**
     * set the custom chat gpt getter action, among other (future ?) stuff :-)
     */
    setAsynchronousActions(plop, appRootPath);
  } else if (generatorName == "add-string") {
    /**
     * permet d'ajouter un string international
     * dans un repo
     */
    initAddIntlString(plop);
  } else if (generatorName == "add-default-app-template") {
    /**
     * permet de créer des templates pour App.tsx avec pattern
     * d'injection d'import et séparation entre component et stylesheet
     */
    initAddDefaultTemplate(plop, appRootPath);
  } else if (generatorName == "question") {
    /**
     * ce code ci dessous initialise le générateur
     * permettant de générer une question
     */
    initAddQuestion(plop, appRootPath);
  } else if (generatorName == null) {
    /**
     * Tu as oublié le purpose, gourgandin
     */
  } else {
    // valeur extraterrestre
  }
}
export { initAllGenerators };
