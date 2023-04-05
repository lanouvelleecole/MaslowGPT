import { addStringToRepoFr } from "../../actions/addStringsToRepo.js";
import { addStringToRepoEng } from "../../actions/addStringsToRepo.js";

function addQuestionDescriptionString(outputs, promptData) {
  outputs.push(
    addStringToRepoFr(
      promptData["description_string_name"],
      promptData["description_string_fr"]
    )
  );
  outputs.push(
    addStringToRepoEng(
      promptData["description_string_name"],
      promptData["description_string_eng"]
    )
  );
}
export { addQuestionDescriptionString };
