//import { createCreateNpmPackageFolder1 } from "./pieces/createCreateNpmPackageFolder1/createCreateNpmPackageFolder1.js";
//import { createCreateNpmPackageFolder2 } from "./pieces/createCreateNpmPackageFolder2/createCreateNpmPackageFolder2.js";
//import { createCreateNpmPackageFolder3 } from "./pieces/createCreateNpmPackageFolder3/createCreateNpmPackageFolder3.js";
//import { createCreateNpmPackageFolder4 } from "./pieces/createCreateNpmPackageFolder4/createCreateNpmPackageFolder4.js";
//import { createCreateNpmPackageFolder5 } from "./pieces/createCreateNpmPackageFolder5/createCreateNpmPackageFolder5.js";
//import { createCreateNpmPackageFolder6 } from "./pieces/createCreateNpmPackageFolder6/createCreateNpmPackageFolder6.js";
//import { createCreateNpmPackageFolder7 } from "./pieces/createCreateNpmPackageFolder7/createCreateNpmPackageFolder7.js";
//import { createCreateNpmPackageFolder8 } from "./pieces/createCreateNpmPackageFolder8/createCreateNpmPackageFolder8.js";
//import { createCreateNpmPackageFolder9 } from "./pieces/createCreateNpmPackageFolder9/createCreateNpmPackageFolder9.js";

// PLOP_IMPORT_ACTION
import * as CloneTemplateAction from "./pieces/PLOPActions/CloneTemplate/CloneTemplateActions.js";
import * as ReplaceWordsInFolderAction from "./pieces/PLOPActions/ReplaceWordsInFolder/ReplaceWordsInFolderActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de CreateNpmPackages, si besoin.
 * Uncomment/comment selon tes feelings
 */
function CreateNpmPackageActions(promptData, appRootPath, plop) {
  //const CreateNpmPackageFolder1 = createCreateNpmPackageFolder1(promptData);
  //const CreateNpmPackageFolder2 = createCreateNpmPackageFolder2(promptData);
  //const CreateNpmPackageFolder3 = createCreateNpmPackageFolder3(promptData);
  //const CreateNpmPackageFolder4 = createCreateNpmPackageFolder4(promptData);
  //const CreateNpmPackageFolder5 = createCreateNpmPackageFolder5(promptData);
  //const CreateNpmPackageFolder6 = createCreateNpmPackageFolder6(promptData);
  //const CreateNpmPackageFolder7 = createCreateNpmPackageFolder7(promptData);
  //const CreateNpmPackageFolder8 = createCreateNpmPackageFolder8(promptData);
  //const CreateNpmPackageFolder9 = createCreateNpmPackageFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    CloneTemplateAction.CloneTemplateAsyncAction(promptData, appRootPath),
    ReplaceWordsInFolderAction.ReplaceWordsInFolderAsyncAction(
      promptData,
      appRootPath
    ),
    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...CreateNpmPackageFolder1,
    //...CreateNpmPackageFolder2,
    //...CreateNpmPackageFolder3,
    //...CreateNpmPackageFolder4,
    //...CreateNpmPackageFolder5,
    //...CreateNpmPackageFolder6,
    //...CreateNpmPackageFolder7,
    //...CreateNpmPackageFolder8,
    //...CreateNpmPackageFolder9,
  ].filter((elm) => elm);
}

export { CreateNpmPackageActions };
