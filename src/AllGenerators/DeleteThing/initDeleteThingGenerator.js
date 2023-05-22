/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme DeleteThing en <command name pascalCase>
renomme DeleteThing en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier DeleteThingActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier DeleteThingActions.js en <command name pascal>Actions.js
renomme le fichier initDeleteThingAndCie.js en init<command name camel>AndCie.js

*/

import { DeleteThingActions } from "../../AllActions/DeleteThing/DeleteThingActions.js";
import { DeleteThingPrompts } from "../../AllPrompts/DeleteThing/DeleteThingPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initDeleteThingGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.delete_thing, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: DeleteThingPrompts(appRootPath),
    actions: function (data) {
      return DeleteThingActions(data, appRootPath, plop);
    },
  });
}

export { initDeleteThingGenerator };
