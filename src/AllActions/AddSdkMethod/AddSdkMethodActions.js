import { createAddSdkMethodFolder1 } from "./pieces/createAddSdkMethodFolder1/createAddSdkMethodFolder1.js";
//import { createAddSdkMethodFolder2 } from "./pieces/createAddSdkMethodFolder2/createAddSdkMethodFolder2.js";
//import { createAddSdkMethodFolder3 } from "./pieces/createAddSdkMethodFolder3/createAddSdkMethodFolder3.js";
//import { createAddSdkMethodFolder4 } from "./pieces/createAddSdkMethodFolder4/createAddSdkMethodFolder4.js";
//import { createAddSdkMethodFolder5 } from "./pieces/createAddSdkMethodFolder5/createAddSdkMethodFolder5.js";
//import { createAddSdkMethodFolder6 } from "./pieces/createAddSdkMethodFolder6/createAddSdkMethodFolder6.js";
//import { createAddSdkMethodFolder7 } from "./pieces/createAddSdkMethodFolder7/createAddSdkMethodFolder7.js";
//import { createAddSdkMethodFolder8 } from "./pieces/createAddSdkMethodFolder8/createAddSdkMethodFolder8.js";
//import { createAddSdkMethodFolder9 } from "./pieces/createAddSdkMethodFolder9/createAddSdkMethodFolder9.js";

// PLOP_IMPORT_ACTION
import * as AddSDKMethodToExportsAction from "./pieces/PLOPActions/AddSDKMethodToExports/AddSDKMethodToExportsActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AddSdkMethods, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AddSdkMethodActions(promptData, appRootPath, plop) {
  const AddSdkMethodFolder1 = createAddSdkMethodFolder1(promptData);
  //const AddSdkMethodFolder2 = createAddSdkMethodFolder2(promptData);
  //const AddSdkMethodFolder3 = createAddSdkMethodFolder3(promptData);
  //const AddSdkMethodFolder4 = createAddSdkMethodFolder4(promptData);
  //const AddSdkMethodFolder5 = createAddSdkMethodFolder5(promptData);
  //const AddSdkMethodFolder6 = createAddSdkMethodFolder6(promptData);
  //const AddSdkMethodFolder7 = createAddSdkMethodFolder7(promptData);
  //const AddSdkMethodFolder8 = createAddSdkMethodFolder8(promptData);
  //const AddSdkMethodFolder9 = createAddSdkMethodFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    ...AddSdkMethodFolder1,
    AddSDKMethodToExportsAction.AddSDKMethodToExportsAsyncAction(
      promptData,
      appRootPath
    ),
    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...AddSdkMethodFolder1,
    //...AddSdkMethodFolder2,
    //...AddSdkMethodFolder3,
    //...AddSdkMethodFolder4,
    //...AddSdkMethodFolder5,
    //...AddSdkMethodFolder6,
    //...AddSdkMethodFolder7,
    //...AddSdkMethodFolder8,
    //...AddSdkMethodFolder9,
  ].filter((elm) => elm);
}

export { AddSdkMethodActions };
