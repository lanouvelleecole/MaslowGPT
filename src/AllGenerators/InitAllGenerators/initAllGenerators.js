import { initThingGenerator } from "../InitThingGenerator/initThingGenerator.js";
import { initAddIntlString } from "../InitAddIntlString/initAddIntlString.js";
import { initAddQuestion } from "../InitAddQuestion/AddQuestion.js";
import { setAIFunctionActions } from "../SetAIFunctionActions/setAIFunctionActions.js";
import { initAddDefaultTemplate } from "../InitAddDefaultTemplate/initAddDefaultTemplate.js";
import { CommandNames } from "../../AppConstants/CommandNames.js";
import { initAddCommandGenerator } from "../InitAddCommandGenerator/initAddCommandGenerator.js";
import { AddCommandAsynchronousActions } from "../../AllActions/AddCommandActions/pieces/AddCommandAsynchronousActions/AddCommandAsynchronousActions.js";
// PLOP_INJECT_GENERATOR_IMPORTS

import { initTranslateStringsGenerator } from "../TranslateStrings/initTranslateStringsGenerator.js";
import { SetTranslateStringsAsyncActions } from "../SetTranslateStringsAsyncActions/SetTranslateStringsAsyncActions.js";


import { initCreateReactNativeAppGenerator } from "../CreateReactNativeApp/initCreateReactNativeAppGenerator.js";
import { SetCreateReactNativeAppAsyncActions } from "../SetCreateReactNativeAppAsyncActions/SetCreateReactNativeAppAsyncActions.js";


import { initDuplicateThingGenerator } from "../DuplicateThing/initDuplicateThingGenerator.js";
import { SetDuplicateThingAsyncActions } from "../SetDuplicateThingAsyncActions/SetDuplicateThingAsyncActions.js";

import { initDeleteThingGenerator } from "../DeleteThing/initDeleteThingGenerator.js";
import { SetDeleteThingAsyncActions } from "../SetDeleteThingAsyncActions/SetDeleteThingAsyncActions.js";

import { initAddCommandActionsGenerator } from "../AddCommandActions/initAddCommandActionsGenerator.js";
import { SetAddCommandActionsAsyncActions } from "../SetAddCommandActionsAsyncActions/SetAddCommandActionsAsyncActions.js";

import { initAddCommandPromptsGenerator } from "../AddCommandPrompts/initAddCommandPromptsGenerator.js";
import { SetAddCommandPromptsAsyncActions } from "../SetAddCommandPromptsAsyncActions/SetAddCommandPromptsAsyncActions.js";

import { initAskQuestionGenerator } from "../AskQuestion/initAskQuestionGenerator.js";
import { SetAskQuestionAsyncActions } from "../SetAskQuestionAsyncActions/SetAskQuestionAsyncActions.js";

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
   * avec ce if ci dessous, copié/collé sous ce commentaire:
   * 

else if (generatorName == "<command_name>") {
  init<command_name_camel_case>Generator(plop, appRootPath);

  Set${command_name_camel}AsyncActions(plop, appRootPath);
}

ajoute les imports correspondants

   * 
   * 
   * Dans src/AllGenerators, copie/colle, et renomme le dossier
   * InitTemplateGenerator en Init<camel_case_generatorName>Generator.
   * 
   * dans ce dossier, renomme le fichier initTemplateGenerator.js,
   * en init<camel_case_generatorName>Generator.js.
   * 
   * Dans src/AllGenerators, copie/colle, et renomme le dossier
   * SetAIFunctionActions, en Set${command_name_camel}AsyncActions.
   * 
   */
  if (generatorName == CommandNames.generate) {
    initThingGenerator(plop, appRootPath);

    /**
     * set the custom chat gpt getter action, among other (future ?) stuff :-)
     */
    setAIFunctionActions(plop, appRootPath);
  }
  // PLOP_INJECT_GENERATOR_ELSE_IF
  else if (generatorName == CommandNames.translate_strings) {
    initTranslateStringsGenerator(plop, appRootPath);

    SetTranslateStringsAsyncActions(plop, appRootPath);
  }
  else if (generatorName == CommandNames.create_react_native_app) {
    initCreateReactNativeAppGenerator(plop, appRootPath);

    SetCreateReactNativeAppAsyncActions(plop, appRootPath);
  }
  else if (generatorName == CommandNames.duplicate_thing) {
    initDuplicateThingGenerator(plop, appRootPath);

    SetDuplicateThingAsyncActions(plop, appRootPath);
  } else if (generatorName == CommandNames.delete_thing) {
    initDeleteThingGenerator(plop, appRootPath);

    SetDeleteThingAsyncActions(plop, appRootPath);
  } else if (generatorName == CommandNames.add_command_actions) {
    initAddCommandActionsGenerator(plop, appRootPath);

    SetAddCommandActionsAsyncActions(plop, appRootPath);
  } else if (generatorName == CommandNames.add_command_prompts) {
    initAddCommandPromptsGenerator(plop, appRootPath);

    SetAddCommandPromptsAsyncActions(plop, appRootPath);
  } else if (generatorName == CommandNames.ask_question) {
    initAskQuestionGenerator(plop, appRootPath);

    SetAskQuestionAsyncActions(plop, appRootPath);
  } else if (generatorName == CommandNames.add_string) {
    /**
     * permet d'ajouter un string international
     * dans un repo
     */
    initAddIntlString(plop, appRootPath);
  } else if (generatorName == CommandNames.add_command) {
    initAddCommandGenerator(plop, appRootPath);

    AddCommandAsynchronousActions(plop, appRootPath);
  } else if (generatorName == CommandNames.add_default_app_template) {
    /**
     * permet de créer des templates pour App.tsx avec pattern
     * d'injection d'import et séparation entre component et stylesheet
     */
    initAddDefaultTemplate(plop, appRootPath);
  } else if (generatorName == CommandNames.question) {
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
