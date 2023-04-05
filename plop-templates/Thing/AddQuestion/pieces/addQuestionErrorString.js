import { addStringToRepoFr } from "../../actions/addStringsToRepo.js";
import { addStringToRepoEng } from "../../actions/addStringsToRepo.js";

function addQuestionErrorString(outputs, promptData) {
  outputs.push(
    addStringToRepoFr(
      promptData["error_string_name"],
      promptData["error_string_fr"]
    ),
    addStringToRepoEng(
      promptData["error_string_name"],
      promptData["error_string_eng"]
    )
  );
}
export { addQuestionErrorString };
