/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme AskQuestion en <command name pascalCase>
renomme AskQuestion en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier AskQuestionActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier AskQuestionActions.js en <command name pascal>Actions.js
renomme le fichier initAskQuestionAndCie.js en init<command name camel>AndCie.js

*/

import { AskQuestionActions } from "../../AllActions/AskQuestion/AskQuestionActions.js";
import { AskQuestionPrompts } from "../../AllPrompts/AskQuestion/AskQuestionPrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initAskQuestionGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.ask_question, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: AskQuestionPrompts(appRootPath),
    actions: function (data) {
      return AskQuestionActions(data, appRootPath, plop);
    },
  });
}

export { initAskQuestionGenerator };
