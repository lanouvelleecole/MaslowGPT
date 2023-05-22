//import { createDeleteThingFolder1 } from "./pieces/createDeleteThingFolder1/createDeleteThingFolder1.js";
//import { createDeleteThingFolder2 } from "./pieces/createDeleteThingFolder2/createDeleteThingFolder2.js";
//import { createDeleteThingFolder3 } from "./pieces/createDeleteThingFolder3/createDeleteThingFolder3.js";
//import { createDeleteThingFolder4 } from "./pieces/createDeleteThingFolder4/createDeleteThingFolder4.js";
//import { createDeleteThingFolder5 } from "./pieces/createDeleteThingFolder5/createDeleteThingFolder5.js";
//import { createDeleteThingFolder6 } from "./pieces/createDeleteThingFolder6/createDeleteThingFolder6.js";
//import { createDeleteThingFolder7 } from "./pieces/createDeleteThingFolder7/createDeleteThingFolder7.js";
//import { createDeleteThingFolder8 } from "./pieces/createDeleteThingFolder8/createDeleteThingFolder8.js";
//import { createDeleteThingFolder9 } from "./pieces/createDeleteThingFolder9/createDeleteThingFolder9.js";

// PLOP_IMPORT_ACTION
import * as DeleteZeShytAction from "./pieces/PLOPActions/DeleteZeShyt/DeleteZeShytActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de DeleteThings, si besoin.
 * Uncomment/comment selon tes feelings
 */
function DeleteThingActions(promptData, appRootPath, plop) {
  //const DeleteThingFolder1 = createDeleteThingFolder1(promptData);
  //const DeleteThingFolder2 = createDeleteThingFolder2(promptData);
  //const DeleteThingFolder3 = createDeleteThingFolder3(promptData);
  //const DeleteThingFolder4 = createDeleteThingFolder4(promptData);
  //const DeleteThingFolder5 = createDeleteThingFolder5(promptData);
  //const DeleteThingFolder6 = createDeleteThingFolder6(promptData);
  //const DeleteThingFolder7 = createDeleteThingFolder7(promptData);
  //const DeleteThingFolder8 = createDeleteThingFolder8(promptData);
  //const DeleteThingFolder9 = createDeleteThingFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    DeleteZeShytAction.DeleteZeShytAction(promptData, appRootPath),
    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...DeleteThingFolder1,
    //...DeleteThingFolder2,
    //...DeleteThingFolder3,
    //...DeleteThingFolder4,
    //...DeleteThingFolder5,
    //...DeleteThingFolder6,
    //...DeleteThingFolder7,
    //...DeleteThingFolder8,
    //...DeleteThingFolder9,
  ].filter((elm) => elm);
}

export { DeleteThingActions };
