import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import path from "path";
import { toPascalCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { reduxPageStateInit } from "./reduxPageStateInit.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";

function createPageStateReduxState({
  subfolder,
  name,
  actualJsFile,
  appRootPathFromC,
}) {
  const pageNamePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsReduxPageState`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}/${pageNamePascal}State`,
    wordsInFilePath: [
      {
        word: "TutorielsState",
        replaceWordWith: `${pageNamePascal}State`,
      },
    ],
    wordsInFile: [
      {
        word: "TutorielsState",
        replaceWordWith: `${pageNamePascal}State`,
      },
      {
        word: "ZeMuthafuckinList",
        replaceWordWith: `${pageNamePascal}List`,
      },
    ],

    wordsInHBSFileName: {
      word: "TutorielsState",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    reduxPageStateInit(subfolder, actualJsFile, `${pageNamePascal}State`)
  );
}

export { createPageStateReduxState };
