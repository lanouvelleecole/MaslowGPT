/* PLOP_INJECT_IMPORT */

/*

Dans ce fichier:

renomme template en <command name pascalCase>
renomme Template en <command name CamelCase>
renomme generatorName en <command name>
renomme generatorDescription en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier TemplateActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier templateActions.js en <command name pascal>Actions.js
renomme le fichier initTemplateAndCie.js en init<command name camel>AndCie.js

oublie pas les imports dans initAllGenerators
*/

import { AddCommandActions } from "../../AllActions/AddCommandActions/AddCommandActions.js";
import { AddCommandPrompts } from "../../AllPrompts/AddCommandPrompts/AddCommandPrompts.js";
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAddCommandGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.add_command, {
    description: "The generator that adds a command to the list of commands.",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AddCommandPrompts(appRootPath),
    actions: function (data) {
      return AddCommandActions(data, appRootPath, plop);
    },
  });
}

export { initAddCommandGenerator };
