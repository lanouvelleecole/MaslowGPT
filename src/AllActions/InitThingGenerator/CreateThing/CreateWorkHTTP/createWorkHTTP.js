import { initWorkHTTPAndCie } from "./initWorkHTTPAndCie.js";
import path from "path";

import { toPascalCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";

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
    initWorkHTTPAndCie(actualJsFile, subfolder)
  );
}

export { createWorkHTTP };
