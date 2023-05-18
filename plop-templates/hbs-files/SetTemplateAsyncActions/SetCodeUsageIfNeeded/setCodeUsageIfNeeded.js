import { AddCodeUseExample } from '../../../services/RegenerateAIFunction/pieces/AddCodeUseExample.js';

function setCodeUsageIfNeeded(plop, appRootPath) {
  /* PLOP_INJECT_CODE */

  plop.setActionType("AJOUTE_CODE_UTILISANT_FONCTION", (answers) => {
    AddCodeUseExample(answers, appRootPath);
  });
}
export { setCodeUsageIfNeeded };
