/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme AddSdkMethod en <command name pascalCase>
renomme AddSdkMethod en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier AddSdkMethodActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier AddSdkMethodActions.js en <command name pascal>Actions.js
renomme le fichier initAddSdkMethodAndCie.js en init<command name camel>AndCie.js

*/

import { AddSdkMethodActions } from "../../AllActions/AddSdkMethod/AddSdkMethodActions.js";
import { AddSdkMethodPrompts } from "../../AllPrompts/AddSdkMethod/AddSdkMethodPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAddSdkMethodGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.add_sdk_method, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AddSdkMethodPrompts(appRootPath),
    actions: function (data) {
      return AddSdkMethodActions(data, appRootPath, plop);
    },
  });
}

export { initAddSdkMethodGenerator };
