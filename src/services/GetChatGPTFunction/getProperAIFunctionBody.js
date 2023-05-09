import { Constants } from '../../AppConstants/Constants.js';

function getProperAIFunctionBody(answers) {
  if (answers.function_returns_or_not == Constants.noReturnLine) {
    return `${answers.gold_caviar.codeUsage[0]}\n`;
  } else if (answers.function_returns_or_not == Constants.returnLine) {
    return `${answers.gold_caviar.codeUsage[0]}\n${answers.gold_caviar.codeUsageReturn[0]}`;
  } else {
    return "";
  }
}
export { getProperAIFunctionBody };
