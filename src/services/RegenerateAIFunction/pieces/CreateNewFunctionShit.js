import path from "path";
import { CreateFileFromScratch } from "../../CreateFileFromScratch/CreateFileFromScratch.js";
import { CreateFolder } from "../../CreateFolder/CreateFolder.js";

function CreateNewFunctionShit(answers, appRootPath) {
  const filePathFromAppRoot = `${answers.ask_for_subfolder}/${answers.name}/${answers.name}.${answers.gold_caviar.codeExtension[0]}`;
  const filePathFromC = path.join(appRootPath, filePathFromAppRoot);
  const piecesFolderFromAppRoot = `${answers.ask_for_subfolder}/${answers.name}/pieces`;
  const piecesFolderFromC = path.join(appRootPath, piecesFolderFromAppRoot);
  const fileContent = `
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

${answers.gold_caviar.mainCode[0]}

${answers.gold_caviar.codeExport[0]}
    `;
  CreateFileFromScratch(filePathFromC, fileContent);

  CreateFolder(piecesFolderFromC);
}

export { CreateNewFunctionShit };
