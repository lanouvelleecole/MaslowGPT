import { createFullMaslowJSONFile } from "./createFullMaslowJSONFile.js";

function setCreateMaslowJSON(plop, appRootPath) {
  plop.setActionType("CREATION_HISTORIQUE", (answers) => {
    createFullMaslowJSONFile(appRootPath, answers);
  });
}
export { setCreateMaslowJSON };
