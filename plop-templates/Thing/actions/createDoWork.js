import { initDoWorkAndCie } from "./initDoWorkAndCie.js";
import path from "path";

import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function createDoWork({ appRootPathFromC, actualJsFile, subfolder, name }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsDoWork`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: `${subfolder}/${namePascal}`,
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
    initDoWorkAndCie(actualJsFile, subfolder)
  );
}

export { createDoWork };
