import { componentInitAndCie } from "./componentInitAndCie.js";
import { toPascalCase } from "./createThing.js";
import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import path from "path";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function createComponent({ subfolder, appRootPathFromC, actualJsFile, name }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsComponent`;
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
        word: "ThumbnailPicker",
        replaceWordWith: namePascal,
      },
    ],

    wordsInHBSFileName: {
      word: "ThumbnailPicker",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    componentInitAndCie({ actualJsFile, subfolder })
  );
}

export { createComponent };
