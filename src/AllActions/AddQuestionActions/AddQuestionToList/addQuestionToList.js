import path from "path";
import { getPathWithForwardSlashes } from "../../../services/GetPathWithForwardSlashes/getPathWithForwardSlashes.js";
import { InjectStuffUnderPatterns } from "../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { Constants } from "../../../AppConstants/Constants.js";
import { toPascalCase } from "../../../services/ToPascalCase/ToPascalCase.js";

function addQuestionToList(promptData, questionFolderPath, outputs) {
  const questionnaire_folder_path = promptData["questionnaire_folder_path"];
  const questionnaire_file_name = promptData["questionnaire_file_name"];
  const question_name = toPascalCase(promptData["question_name"]);

  const questionnaire_list_path = getPathWithForwardSlashes(
    path.join(process.cwd(), questionnaire_folder_path, questionnaire_file_name)
  );

  const addimp = {
    deletePreviousStuff: true,
    indent: true,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    stuffUnderPattern: `import { ${question_name} } from "${questionFolderPath}/${question_name}";`,
  };

  const addCall = {
    deletePreviousStuff: true,
    indent: true,
    pattern: `/* PLOP_INJECT_CODE */`,
    stuffUnderPattern: `${question_name}(),`,
  };

  const addAll = InjectStuffUnderPatterns(questionnaire_list_path, [
    addimp,
    addCall,
  ]);

  //outputs.push(addimp, addCall);
}
export { addQuestionToList };
