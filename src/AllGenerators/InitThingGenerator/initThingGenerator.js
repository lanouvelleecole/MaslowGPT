/* PLOP_INJECT_IMPORT */

import { getActionsForThingToBeCreated } from "../../AllActions/InitThingGenerator/GetActionsForThingToBeCreatedIfPossible.js";
import { getGeneratePrompts } from "../../AllPrompts/GetGeneratePrompts/getGeneratePrompts.js";

function initThingGenerator(plop, appRootPath) {
  /* PLOP_INJECT_CODE */
  //printObjectProperties(plop);

  plop.setGenerator("generate", {
    description: "Creates something.",

    /**
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre chose.
     *
     */
    prompts: getGeneratePrompts(appRootPath),
    actions: function (data) {
      //createNPMMaslowJSONFile(data);

      return getActionsForThingToBeCreated(data, appRootPath, plop);
    },
  });
}

export { initThingGenerator };
