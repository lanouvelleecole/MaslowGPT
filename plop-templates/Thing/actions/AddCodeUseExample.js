import { Constants } from "../AddQuestion/pieces/Constants.js";
import path from "path";
import { InjectStuffUnderPatterns } from "./InjectStuffUnderPatterns.js";
import { DeleteDuplicatePieces } from "./DeleteDuplicatePieces.js";
import { getProperAIFunctionBody } from "./getProperAIFunctionBody.js";
import { getProperAIFunctionImport } from "./getProperAIFunctionImport.js";

function AddCodeUseExample(answers, appRootPath) {
  // le path du fichier .js dans lequel on utilise
  // la chose. ou null, si "On veut rien, capiche"
  const jsFileChoice = answers.ask_for_js_file;
  const actualJsFile = jsFileChoice != Constants.noChoice ? jsFileChoice : null;
  let filePath = actualJsFile;

  if (!filePath) {
    return;
  }

  filePath = path.join(appRootPath, filePath);

  const importPattern = `/* PLOP_INJECT_IMPORT */`;
  const codePattern = "/* PLOP_INJECT_CODE */";

  /*console.log(
      `let's inject stuff under the patterns, in the file ${filePath}`
    );*/
  // vide le body de la fonction dans laquelle
  // tu va utiliser cette fonction
  const delete_function_body_or_not = answers.delete_function_body_or_not;
  const do_we_delete =
    delete_function_body_or_not == Constants.yes ? true : false;

  // supprime les blocs de caca
  DeleteDuplicatePieces(filePath, [
    {
      deletePreviousStuff: true,
      pattern: `/* PLOP_IMPORT_${answers.name} */`,
    },
    {
      deletePreviousStuff: do_we_delete,
      pattern: `/* PLOP_CODE_LINES_${answers.name} */`,
    },
  ]);

  // ajoute les imports et ligne de code d'utilisation, sous patterns,
  // selon que l'on souhaite un import absolu/relatif,
  // et qu'on souhaite un return ou pas
  InjectStuffUnderPatterns(filePath, [
    {
      pattern: importPattern,
      stuffUnderPattern: `/* PLOP_IMPORT_${
        answers.name
      } */\n${getProperAIFunctionImport(answers)}\n/* PLOP_IMPORT_${
        answers.name
      } */`,
      deletePreviousStuff: true,
      previousStuffPattern: `/* PLOP_IMPORT_${answers.name} */`,
    },
    {
      pattern: codePattern,

      stuffUnderPattern: `/* PLOP_CODE_LINES_${
        answers.name
      } */\n${getProperAIFunctionBody(answers)}\n/* PLOP_CODE_LINES_${
        answers.name
      } */`,
      deletePreviousStuff: do_we_delete,
      previousStuffPattern: `/* PLOP_CODE_LINES_${answers.name} */`,
    },
  ]);
}
export { AddCodeUseExample };
