import { getChoicesStrings } from "../AddFrenchStrings/getChoicesStrings.js";

function addEnglishStrings(promptData, questionFolderPath, outputs) {
  const description_string_name = promptData["description_string_name"];
  const description_string_eng = promptData["description_string_eng"];

  const error_string_name = promptData["error_string_name"];
  const error_string_eng = promptData["error_string_eng"];

  const strings = getChoicesStrings(promptData);

  /**
   * On ajoute:
   *
   * La description de question
   *
   * Le message d'erreur de question
   */
  const plopAction = {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/{{pascalCase repo_name}}/{{pascalCase repo_name}}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_ENG_STRING */`,
    template: `
\t\t${description_string_name}: "${description_string_eng}",
\t\t${error_string_name}: "${error_string_eng}",
${strings.eng}`,
  };

  outputs.push(plopAction);
}
export { addEnglishStrings };
