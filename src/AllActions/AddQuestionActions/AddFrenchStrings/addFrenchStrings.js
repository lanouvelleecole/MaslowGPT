import { InjectStuffUnderPatterns } from "../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { getChoicesStrings } from "./getChoicesStrings.js";

function addFrenchStrings(promptData, questionFolderPath, outputs) {
  const description_string_name = promptData["description_string_name"];
  const description_string_src = promptData["description_string_src"];

  const error_string_name = promptData["error_string_name"];
  const error_string_src = promptData["error_string_src"];
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
    pattern: `/* PLOP_INJECT_SRC_STRING */`,
    stuffUnderPattern: `
${description_string_name}: "${description_string_src}",
${error_string_name}: "${error_string_src}",
${strings.fr}`,
  };

  const addAll = InjectStuffUnderPatterns(
    `${process.cwd()}/src/stringRepos/${repo_name}/${repo_name}.js`,
    [plopAction]
  );
}
export { addFrenchStrings };
