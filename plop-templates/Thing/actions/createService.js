import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import path from "path";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function createService({ subfolder, appRootPathFromC, actualJsFile, name }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsService`;
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
        word: "Service",
        replaceWordWith: namePascal,
      },
    ],

    wordsInHBSFileName: {
      word: "Service",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams);
}
export { createService };
