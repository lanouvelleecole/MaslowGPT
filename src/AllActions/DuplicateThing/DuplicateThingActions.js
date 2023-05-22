//import { createDuplicateThingFolder1 } from "./pieces/createDuplicateThingFolder1/createDuplicateThingFolder1.js";
//import { createDuplicateThingFolder2 } from "./pieces/createDuplicateThingFolder2/createDuplicateThingFolder2.js";
//import { createDuplicateThingFolder3 } from "./pieces/createDuplicateThingFolder3/createDuplicateThingFolder3.js";
//import { createDuplicateThingFolder4 } from "./pieces/createDuplicateThingFolder4/createDuplicateThingFolder4.js";
//import { createDuplicateThingFolder5 } from "./pieces/createDuplicateThingFolder5/createDuplicateThingFolder5.js";
//import { createDuplicateThingFolder6 } from "./pieces/createDuplicateThingFolder6/createDuplicateThingFolder6.js";
//import { createDuplicateThingFolder7 } from "./pieces/createDuplicateThingFolder7/createDuplicateThingFolder7.js";
//import { createDuplicateThingFolder8 } from "./pieces/createDuplicateThingFolder8/createDuplicateThingFolder8.js";
//import { createDuplicateThingFolder9 } from "./pieces/createDuplicateThingFolder9/createDuplicateThingFolder9.js";

// PLOP_IMPORT_ACTION
import * as DuplicateBitchAction from "./pieces/PLOPActions/DuplicateBitch/DuplicateBitchActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de DuplicateThings, si besoin.
 * Uncomment/comment selon tes feelings
 */
function DuplicateThingActions(promptData, appRootPath, plop) {
  //const DuplicateThingFolder1 = createDuplicateThingFolder1(promptData);
  //const DuplicateThingFolder2 = createDuplicateThingFolder2(promptData);
  //const DuplicateThingFolder3 = createDuplicateThingFolder3(promptData);
  //const DuplicateThingFolder4 = createDuplicateThingFolder4(promptData);
  //const DuplicateThingFolder5 = createDuplicateThingFolder5(promptData);
  //const DuplicateThingFolder6 = createDuplicateThingFolder6(promptData);
  //const DuplicateThingFolder7 = createDuplicateThingFolder7(promptData);
  //const DuplicateThingFolder8 = createDuplicateThingFolder8(promptData);
  //const DuplicateThingFolder9 = createDuplicateThingFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    DuplicateBitchAction.DuplicateBitchAppendAction(promptData, appRootPath),

    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...DuplicateThingFolder1,
    //...DuplicateThingFolder2,
    //...DuplicateThingFolder3,
    //...DuplicateThingFolder4,
    //...DuplicateThingFolder5,
    //...DuplicateThingFolder6,
    //...DuplicateThingFolder7,
    //...DuplicateThingFolder8,
    //...DuplicateThingFolder9,
  ].filter((elm) => elm);
}

export { DuplicateThingActions };
