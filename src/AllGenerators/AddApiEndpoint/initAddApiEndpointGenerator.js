/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme AddApiEndpoint en <command name pascalCase>
renomme AddApiEndpoint en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier AddApiEndpointActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier AddApiEndpointActions.js en <command name pascal>Actions.js
renomme le fichier initAddApiEndpointAndCie.js en init<command name camel>AndCie.js

*/

import { AddApiEndpointActions } from "../../AllActions/AddApiEndpoint/AddApiEndpointActions.js";
import { AddApiEndpointPrompts } from "../../AllPrompts/AddApiEndpoint/AddApiEndpointPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAddApiEndpointGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.add_api_endpoint, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AddApiEndpointPrompts(appRootPath),
    actions: function (data) {
      return AddApiEndpointActions(data, appRootPath, plop);
    },
  });
}

export { initAddApiEndpointGenerator };
