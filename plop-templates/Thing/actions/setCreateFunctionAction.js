import { CreateNewFunctionShit } from "./CreateNewFunctionShit.js";

function setCreateFunctionAction(plop, appRootPath) {
  plop.setActionType("CREATION_FICHIER_FONCTION", (answers) => {
    CreateNewFunctionShit(answers, appRootPath);
  });
}

export { setCreateFunctionAction };
