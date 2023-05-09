import { initHTDPAndCie } from './initHTDPAndCie.js';
import path from "path";

import { toPascalCase } from '../../../../services/ToPascalCase/ToPascalCase.js';
import { createTemplateFromFolder } from '../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js';
import { getNPMFolderRoot } from '../../../../../getNPMFolderRoot.js';

function createHTDPTemplate({
  appRootPathFromC,
  actualJsFile,
  subfolder,
  name,
}) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsHTDP`;
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
    initHTDPAndCie(actualJsFile, subfolder)
  );
}
export { createHTDPTemplate };
