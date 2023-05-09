import { Constants } from '../../AppConstants/Constants.js';

function getProperAIFunctionImport(answers) {
  if (answers.function_import_type == Constants.pathAbsolu) {
    return answers.gold_caviar.codeImport[0];
  } else if (answers.function_import_type == Constants.pathRelatif) {
    return answers.gold_caviar.codeImportRelative[0];
  } else {
    return "";
  }
}
export { getProperAIFunctionImport };
