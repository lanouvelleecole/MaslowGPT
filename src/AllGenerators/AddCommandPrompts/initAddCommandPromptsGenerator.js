/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme AddCommandPrompts en <command name pascalCase>
renomme AddCommandPrompts en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier AddCommandPromptsActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier AddCommandPromptsActions.js en <command name pascal>Actions.js
renomme le fichier initAddCommandPromptsAndCie.js en init<command name camel>AndCie.js

*/

import { AddCommandPromptsActions } from "../../AllActions/AddCommandPrompts/AddCommandPromptsActions.js";
import { AddCommandPromptsPrompts } from "../../AllPrompts/AddCommandPrompts/AddCommandPromptsPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAddCommandPromptsGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.add_command_prompts, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AddCommandPromptsPrompts(appRootPath),
    actions: function (data) {
      return AddCommandPromptsActions(data, appRootPath, plop);
    },
  });
}

export { initAddCommandPromptsGenerator };
