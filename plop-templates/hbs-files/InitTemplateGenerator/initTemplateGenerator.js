/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme template en <command name pascalCase>
renomme Template en <command name CamelCase>
renomme generatorName en <command name>
renomme generatorDescription en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier TemplateActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier templateActions.js en <command name pascal>Actions.js
renomme le fichier initTemplateAndCie.js en init<command name camel>AndCie.js

*/

import { templateActions } from "../../AllActions/Template/templateActions.js";
import { templatePrompts } from "../../AllPrompts/Template/templatePrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initTemplateGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator("generatorName", {
    description: "generatorDescription",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: templatePrompts(appRootPath),
    actions: function (data) {
      return templateActions(data, appRootPath, plop);
    },
  });
}

export { initTemplateGenerator };
