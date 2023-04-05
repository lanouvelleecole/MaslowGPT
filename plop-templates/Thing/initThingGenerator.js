/* PLOP_INJECT_IMPORT */
import path from "path";

import { getActionsForThingToBeCreated } from "./getActionsForThingToBeCreated.1.js";
import { createNPMMaslowJSONFile } from "./actions/createNPMMaslowJSONFile.js";
import { getGeneratePrompts } from "./getGeneratePrompts.js";

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
    actions: function (data, answers) {
      createNPMMaslowJSONFile(data);

      return getActionsForThingToBeCreated(data, appRootPath, plop);
    },
  });
}

export { initThingGenerator };
