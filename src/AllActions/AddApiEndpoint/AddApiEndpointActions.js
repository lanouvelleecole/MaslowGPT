import { createAddApiEndpointFolder1 } from "./pieces/createAddApiEndpointFolder1/createAddApiEndpointFolder1.js";
//import { createAddApiEndpointFolder2 } from "./pieces/createAddApiEndpointFolder2/createAddApiEndpointFolder2.js";
//import { createAddApiEndpointFolder3 } from "./pieces/createAddApiEndpointFolder3/createAddApiEndpointFolder3.js";
//import { createAddApiEndpointFolder4 } from "./pieces/createAddApiEndpointFolder4/createAddApiEndpointFolder4.js";
//import { createAddApiEndpointFolder5 } from "./pieces/createAddApiEndpointFolder5/createAddApiEndpointFolder5.js";
//import { createAddApiEndpointFolder6 } from "./pieces/createAddApiEndpointFolder6/createAddApiEndpointFolder6.js";
//import { createAddApiEndpointFolder7 } from "./pieces/createAddApiEndpointFolder7/createAddApiEndpointFolder7.js";
//import { createAddApiEndpointFolder8 } from "./pieces/createAddApiEndpointFolder8/createAddApiEndpointFolder8.js";
//import { createAddApiEndpointFolder9 } from "./pieces/createAddApiEndpointFolder9/createAddApiEndpointFolder9.js";

// PLOP_IMPORT_ACTION
import * as AddImportAndEndpointInitAction from "./pieces/PLOPActions/AddImportAndEndpointInit/AddImportAndEndpointInitActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AddApiEndpoints, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AddApiEndpointActions(promptData, appRootPath, plop) {
  const AddApiEndpointFolder1 = createAddApiEndpointFolder1(promptData);
  //const AddApiEndpointFolder2 = createAddApiEndpointFolder2(promptData);
  //const AddApiEndpointFolder3 = createAddApiEndpointFolder3(promptData);
  //const AddApiEndpointFolder4 = createAddApiEndpointFolder4(promptData);
  //const AddApiEndpointFolder5 = createAddApiEndpointFolder5(promptData);
  //const AddApiEndpointFolder6 = createAddApiEndpointFolder6(promptData);
  //const AddApiEndpointFolder7 = createAddApiEndpointFolder7(promptData);
  //const AddApiEndpointFolder8 = createAddApiEndpointFolder8(promptData);
  //const AddApiEndpointFolder9 = createAddApiEndpointFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE

    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    ...AddApiEndpointFolder1,
    AddImportAndEndpointInitAction.AddImportAndEndpointInitAsyncAction(
      promptData,
      appRootPath
    ),
    //...AddApiEndpointFolder2,
    //...AddApiEndpointFolder3,
    //...AddApiEndpointFolder4,
    //...AddApiEndpointFolder5,
    //...AddApiEndpointFolder6,
    //...AddApiEndpointFolder7,
    //...AddApiEndpointFolder8,
    //...AddApiEndpointFolder9,
  ].filter((elm) => elm);
}

export { AddApiEndpointActions };
