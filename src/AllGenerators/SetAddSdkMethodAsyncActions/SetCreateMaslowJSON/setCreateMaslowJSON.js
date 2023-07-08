import { createMaslowJSONAndStuff } from "./createMaslowJSONAndStuff.js";

function setCreateMaslowJSON(plop, appRootPath) {
  plop.setActionType("CREATION_HISTORIQUE", (answers) => {
    createMaslowJSONAndStuff(appRootPath, answers);
  });
}
export { setCreateMaslowJSON };
