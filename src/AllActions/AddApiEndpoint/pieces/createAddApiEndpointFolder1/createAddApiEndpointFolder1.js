import path from "path";
import { initAddApiEndpointAndCie } from "./initAddApiEndpointAndCie.js";
import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "../../../../services/CreateTemplateFromFolder/createTemplateFromFolder.js";

/**
 *
 *
 * Ici, crée ton dossier AddApiEndpoint, en détail.
 *
 * Remplace les trucs <comme ceci> par ce qu'il faut, selon description.
 */
function createAddApiEndpointFolder1(promptData) {
  // eslint-disable-next-line no-unused-vars
  const EndpointName = promptData["EndpointName"];
  const AddApiEndpointFolderPathFromAppRoot = `plop-templates/hbs-files/TemplateAPIEndpoint`;
  const AddApiEndpointFolderPath = path.join(
    getNPMFolderRoot(),
    AddApiEndpointFolderPathFromAppRoot
  );
  const creationFolderFromAppRoot = path.join(
    "src/endpoints",
    EndpointName + "Endpoint"
  );

  const AddApiEndpointCreationParams = {
    templateFolderPath: AddApiEndpointFolderPath,
    templateFolderPathFromAppRoot: AddApiEndpointFolderPathFromAppRoot,
    creationFolderFromAppRoot: creationFolderFromAppRoot,
    wordsInFilePath: [
      {
        word: "edit_gpt_art",
        replaceWordWith: EndpointName,
      },
    ],
    wordsInFile: [
      {
        word: "edit_gpt_art",
        replaceWordWith: EndpointName,
      },
    ],

    wordsInHBSFileName: {
      word: "edit_gpt_art",
      replaceWordWith: EndpointName,
    },
  };

  return createTemplateFromFolder(AddApiEndpointCreationParams).concat(
    initAddApiEndpointAndCie({
      creationFolderFromAppRoot: creationFolderFromAppRoot,
      promptData,
    })
  );
}

export { createAddApiEndpointFolder1 };
