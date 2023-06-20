/* PLOP_INJECT_IMPORT */

/*


Dans ce fichier:

renomme CreateNpmPackage en <command name pascalCase>
renomme CreateNpmPackage en <command name CamelCase>
renomme generatorName en <command name>
renomme Cette commande permet de ..... en une description textuelle de cette commande.

dans src/AllActions, copie/colle le dossier CreateNpmPackageActions, 
et renomme le en <command name camel>Actions.

dans src/AllActions/<command name camel>Actions, 
renomme le fichier CreateNpmPackageActions.js en <command name pascal>Actions.js
renomme le fichier initCreateNpmPackageAndCie.js en init<command name camel>AndCie.js

*/

import { CreateNpmPackageActions } from "../../AllActions/CreateNpmPackage/CreateNpmPackageActions.js";
import { CreateNpmPackagePrompts } from "../../AllPrompts/CreateNpmPackage/CreateNpmPackagePrompts.js";
// eslint-disable-next-line no-unused-vars
import { CommandNames } from "../../AppConstants/CommandNames.js";

function initCreateNpmPackageGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setGenerator(CommandNames.create_npm_package, {
    description: "Cette commande permet de .....",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: CreateNpmPackagePrompts(appRootPath),
    actions: function (data) {
      return CreateNpmPackageActions(data, appRootPath, plop);
    },
  });
}

export { initCreateNpmPackageGenerator };
