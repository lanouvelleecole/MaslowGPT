import { initSingletonAndCie } from "./initSingletonAndCie.js";
import path from "path";

import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

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
