import { InjectStuffUnderPatterns } from "../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { getChoicesStrings } from "../AddFrenchStrings/getChoicesStrings.js";

function addEnglishStrings(promptData, questionFolderPath, outputs) {
  const description_string_name = promptData["description_string_name"];
  const description_string_eng = promptData["description_string_eng"];

  const error_string_name = promptData["error_string_name"];
  const error_string_eng = promptData["error_string_eng"];
  const repo_name = promptData["repo_name"];

  const strings = getChoicesStrings(promptData);

  /**
   * On ajoute:
   *
   * La description de question
   *
   * Le message d'erreur de question
   */
  const plopAction = {
    deletePreviousStuff: true,
    indent: true,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_ENG_STRING */`,
    stuffUnderPattern: `
\t\t${description_string_name}: "${description_string_eng}",
\t\t${error_string_name}: "${error_string_eng}",
${strings.eng}`,
  };

  const addAll = InjectStuffUnderPatterns(
    `${process.cwd()}/src/stringRepos/${repo_name}/${repo_name}.js`,
    [plopAction]
  );
}
export { addEnglishStrings };
