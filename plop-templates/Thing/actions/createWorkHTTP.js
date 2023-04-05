import { initWorkHTTPAndCie } from "./initWorkHTTPAndCie.js";
import path from "path";

import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function createWorkHTTP({ appRootPathFromC, actualJsFile, subfolder, name }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/WorkPieces`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}/AllWorks/${namePascal}`,
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
    initWorkHTTPAndCie(actualJsFile, subfolder)
  );
}

export { createWorkHTTP };
