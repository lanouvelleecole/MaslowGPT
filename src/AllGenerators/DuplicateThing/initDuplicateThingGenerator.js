/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme DuplicateThing en <command name pascalCase>
renomme DuplicateThing en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier DuplicateThingActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier DuplicateThingActions.js en <command name pascal>Actions.js
renomme le fichier initDuplicateThingAndCie.js en init<command name camel>AndCie.js

*/

import { DuplicateThingActions } from "../../AllActions/DuplicateThing/DuplicateThingActions.js";
import { DuplicateThingPrompts } from "../../AllPrompts/DuplicateThing/DuplicateThingPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initDuplicateThingGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.duplicate_thing, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: DuplicateThingPrompts(appRootPath),
    actions: function (data) {
      return DuplicateThingActions(data, appRootPath, plop);
    },
  });
}

export { initDuplicateThingGenerator };
