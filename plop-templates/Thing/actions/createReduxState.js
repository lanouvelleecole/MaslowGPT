import { createTemplateFromFolder } from "./createTemplateFromFolder.js";
import path from "path";
import { toPascalCase } from "../actions/createThing.js";
import { reduxInitAndCie } from "./reduxInitAndCie.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function createReduxState({ subfolder, name, actualJsFile, appRootPathFromC }) {
  const namePascal = toPascalCase(name);
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/TrucsRedux`;
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
        word: "TutorielsState",
        replaceWordWith: namePascal,
      },
    ],

    wordsInHBSFileName: {
      word: "TutorielsState",
      replaceWordWith: "Items",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    reduxInitAndCie(subfolder, actualJsFile, namePascal)
  );
}

export { createReduxState };
