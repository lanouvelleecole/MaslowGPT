import { componentInitAndCie } from "./componentInitAndCie.js";
import { toPascalCase } from "../../../../services/ToPascalCase/ToPascalCase.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import path from "path";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";

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
    wordsInFilePath: [
      {
        word: `ThumbnailPicker`,
        replaceWordWith: namePascal,
      },
    ],
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
