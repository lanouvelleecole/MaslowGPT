//import { createCreateReactNativeAppFolder1 } from "./pieces/createCreateReactNativeAppFolder1/createCreateReactNativeAppFolder1.js";
//import { createCreateReactNativeAppFolder2 } from "./pieces/createCreateReactNativeAppFolder2/createCreateReactNativeAppFolder2.js";
//import { createCreateReactNativeAppFolder3 } from "./pieces/createCreateReactNativeAppFolder3/createCreateReactNativeAppFolder3.js";
//import { createCreateReactNativeAppFolder4 } from "./pieces/createCreateReactNativeAppFolder4/createCreateReactNativeAppFolder4.js";
//import { createCreateReactNativeAppFolder5 } from "./pieces/createCreateReactNativeAppFolder5/createCreateReactNativeAppFolder5.js";
//import { createCreateReactNativeAppFolder6 } from "./pieces/createCreateReactNativeAppFolder6/createCreateReactNativeAppFolder6.js";
//import { createCreateReactNativeAppFolder7 } from "./pieces/createCreateReactNativeAppFolder7/createCreateReactNativeAppFolder7.js";
//import { createCreateReactNativeAppFolder8 } from "./pieces/createCreateReactNativeAppFolder8/createCreateReactNativeAppFolder8.js";
//import { createCreateReactNativeAppFolder9 } from "./pieces/createCreateReactNativeAppFolder9/createCreateReactNativeAppFolder9.js";

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
 * Ici, crée 0 ou plusieurs dossier a partir de CreateReactNativeApps, si besoin.
 * Uncomment/comment selon tes feelings
 */
function CreateReactNativeAppActions(promptData, appRootPath, plop) {
  //const CreateReactNativeAppFolder1 = createCreateReactNativeAppFolder1(promptData);
  //const CreateReactNativeAppFolder2 = createCreateReactNativeAppFolder2(promptData);
  //const CreateReactNativeAppFolder3 = createCreateReactNativeAppFolder3(promptData);
  //const CreateReactNativeAppFolder4 = createCreateReactNativeAppFolder4(promptData);
  //const CreateReactNativeAppFolder5 = createCreateReactNativeAppFolder5(promptData);
  //const CreateReactNativeAppFolder6 = createCreateReactNativeAppFolder6(promptData);
  //const CreateReactNativeAppFolder7 = createCreateReactNativeAppFolder7(promptData);
  //const CreateReactNativeAppFolder8 = createCreateReactNativeAppFolder8(promptData);
  //const CreateReactNativeAppFolder9 = createCreateReactNativeAppFolder9(promptData);
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
    //...CreateReactNativeAppFolder1,
    //...CreateReactNativeAppFolder2,
    //...CreateReactNativeAppFolder3,
    //...CreateReactNativeAppFolder4,
    //...CreateReactNativeAppFolder5,
    //...CreateReactNativeAppFolder6,
    //...CreateReactNativeAppFolder7,
    //...CreateReactNativeAppFolder8,
    //...CreateReactNativeAppFolder9,
  ].filter((elm) => elm);
}

export { CreateReactNativeAppActions };
