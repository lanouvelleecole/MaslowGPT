/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme SetAiModel en <command name pascalCase>
renomme SetAiModel en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier SetAiModelActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier SetAiModelActions.js en <command name pascal>Actions.js
renomme le fichier initSetAiModelAndCie.js en init<command name camel>AndCie.js

*/

import { SetAiModelActions } from "../../AllActions/SetAiModel/SetAiModelActions.js";
import { SetAiModelPrompts } from "../../AllPrompts/SetAiModel/SetAiModelPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initSetAiModelGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.set_ai_model, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: SetAiModelPrompts(appRootPath),
    actions: function (data) {
      return SetAiModelActions(data, appRootPath, plop);
    },
  });
}

export { initSetAiModelGenerator };
