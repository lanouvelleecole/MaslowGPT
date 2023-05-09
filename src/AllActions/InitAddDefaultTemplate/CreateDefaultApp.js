import { defaultTemplateInitAndCie } from "./DefaultTemplateInitAndCie.js";
import path from "path";
import { createTemplateFromFolder } from "../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
export const createDefaultApp = ({ appRootPathFromC }) => {
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/AppPieces`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: ``,
    wordsInFile: [
      {
        word: "App",
        replaceWordWith: "App",
      },
    ],

    wordsInHBSFileName: {
      word: "App",
      replaceWordWith: "App",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    defaultTemplateInitAndCie()
  );
};
