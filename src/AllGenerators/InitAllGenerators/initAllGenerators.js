import { initThingGenerator } from "../InitThingGenerator/initThingGenerator.js";
import { initAddIntlString } from "../InitAddIntlString/initAddIntlString.js";
import { initAddQuestion } from "../InitAddQuestion/AddQuestion.js";
import { setAsynchronousActions } from "../SetAsynchronousActions/setAsynchronousActions.js";
import { initAddDefaultTemplate } from "../InitAddDefaultTemplate/initAddDefaultTemplate.js";

function initAllGenerators(plop) {
  // le path Command line ou la commande maslow xxx à été exécuté
  const appRootPath = process.cwd();

  // le xxx de la commande maslow xxx
  const generatorName = process.argv[2];

  /**
   * ce code ci dessous initialise le générateur
   * permettant de générer
   * un component, une page, un service,
   * ou un repo string
   *
   * ADD_MASLOW_COMMAND_2
   * 
   * si la commande en cours d'ajout
   * à un ou plusieurs prompts,
   * alors ajoute un call de fonction 
   * initialisatrice de générateur PLOP,
   * avec ce if ci dessous, copié/collé au dessus du if existant sous ce commentaire:
   * 

if (generatorName == "<command_name>") {
  init<command_name_camel_case>Generator(plop, appRootPath);

  <command name pascal>AsynchronousActions(plop, appRootPath);
}

   * 
   * et turn le if précédent, en else if.
   * 
   * Dans src/AllGenerators, copie/colle, et renomme le dossier
   * InitTemplateGenerator en Init<camel_case_generatorName>Generator.
   * 
   * dans ce dossier, renomme le fichier initTemplateGenerator.js,
   * en init<camel_case_generatorName>Generator.js.
   * 
   * Dans src/AllActions/TemplateActions/pieces, 
   * copie/colle, et renomme le dossier
   * TemplateAsynchronousActions en <camel_case_generatorName>AsynchronousActions.
   * 
   * dans ce dossier, renomme le fichier templateAsynchronousActions.js,
   * en <pascal_case_generatorName>AsynchronousActions.js.
   * 
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
    initAddIntlString(plop, appRootPath);
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
