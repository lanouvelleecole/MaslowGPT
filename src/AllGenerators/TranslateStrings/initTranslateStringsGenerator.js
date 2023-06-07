/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme TranslateStrings en <command name pascalCase>
renomme TranslateStrings en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier TranslateStringsActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier TranslateStringsActions.js en <command name pascal>Actions.js
renomme le fichier initTranslateStringsAndCie.js en init<command name camel>AndCie.js

*/

import { TranslateStringsActions } from "../../AllActions/TranslateStrings/TranslateStringsActions.js";
import { TranslateStringsPrompts } from "../../AllPrompts/TranslateStrings/TranslateStringsPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initTranslateStringsGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.translate_strings, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: TranslateStringsPrompts(appRootPath),
    actions: function (data) {
      return TranslateStringsActions(data, appRootPath, plop);
    },
  });
}

export { initTranslateStringsGenerator };
