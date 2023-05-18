import { initSingletonAndCie } from "./initSingletonAndCie.js";
import path from "path";

import { toPascalCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";

function createSingleton({ appRootPathFromC, actualJsFile, subfolder, name }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsSingleton`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}`,
    wordsInFilePath: [
      {
        word: "Trucs",
        replaceWordWith: namePascal,
      },
    ],
    wordsInFile: [
      {
        word: "Trucs",
        replaceWordWith: namePascal,
      },
    ],

    wordsInHBSFileName: {
      word: "Trucs",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    initSingletonAndCie(actualJsFile, subfolder)
  );
}

export { createSingleton };
