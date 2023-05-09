import { DeleteOldFunctionShit } from './pieces/DeleteOldFunctionShit.js';

function deleteCaca(plop, appRootPath) {
  plop.setActionType("SUPPRESSION_DECHETS", (answers, config, plop) => {
    DeleteOldFunctionShit(answers, appRootPath);
  });
}

export { deleteCaca };
