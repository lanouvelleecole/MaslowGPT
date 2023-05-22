/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme AddCommandActions en <command name pascalCase>
renomme AddCommandActions en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier AddCommandActionsActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier AddCommandActionsActions.js en <command name pascal>Actions.js
renomme le fichier initAddCommandActionsAndCie.js en init<command name camel>AndCie.js

*/

import { AddCommandActionsActions } from "../../AllActions/AddCommandActions/AddCommandActionsActions.js";
import { AddCommandActionsPrompts } from "../../AllPrompts/AddCommandActions/AddCommandActionsPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAddCommandActionsGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.add_command_actions, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AddCommandActionsPrompts(appRootPath),
    actions: function (data) {
      return AddCommandActionsActions(data, appRootPath, plop);
    },
  });
}

export { initAddCommandActionsGenerator };
