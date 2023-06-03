/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme CreateReactNativeApp en <command name pascalCase>
renomme CreateReactNativeApp en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier CreateReactNativeAppActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier CreateReactNativeAppActions.js en <command name pascal>Actions.js
renomme le fichier initCreateReactNativeAppAndCie.js en init<command name camel>AndCie.js

*/

import { CreateReactNativeAppActions } from "../../AllActions/CreateReactNativeApp/CreateReactNativeAppActions.js";
import { CreateReactNativeAppPrompts } from "../../AllPrompts/CreateReactNativeApp/CreateReactNativeAppPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initCreateReactNativeAppGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.create_react_native_app, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: CreateReactNativeAppPrompts(appRootPath),
    actions: function (data) {
      return CreateReactNativeAppActions(data, appRootPath, plop);
    },
  });
}

export { initCreateReactNativeAppGenerator };
