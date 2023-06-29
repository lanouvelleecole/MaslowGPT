import { DeleteOldRequestShit } from "./pieces/DeleteOldRequestShit.js";

function deleteCaca(plop, appRootPath) {
  plop.setActionType("SUPPRESSION_DECHETS", (answers, config, plop) => {
    DeleteOldRequestShit(answers, appRootPath);
  });
}

export { deleteCaca };
