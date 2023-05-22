//import { createAddCommandActionsFolder1 } from "./pieces/createAddCommandActionsFolder1/createAddCommandActionsFolder1.js";
//import { createAddCommandActionsFolder2 } from "./pieces/createAddCommandActionsFolder2/createAddCommandActionsFolder2.js";
//import { createAddCommandActionsFolder3 } from "./pieces/createAddCommandActionsFolder3/createAddCommandActionsFolder3.js";
//import { createAddCommandActionsFolder4 } from "./pieces/createAddCommandActionsFolder4/createAddCommandActionsFolder4.js";
//import { createAddCommandActionsFolder5 } from "./pieces/createAddCommandActionsFolder5/createAddCommandActionsFolder5.js";
//import { createAddCommandActionsFolder6 } from "./pieces/createAddCommandActionsFolder6/createAddCommandActionsFolder6.js";
//import { createAddCommandActionsFolder7 } from "./pieces/createAddCommandActionsFolder7/createAddCommandActionsFolder7.js";
//import { createAddCommandActionsFolder8 } from "./pieces/createAddCommandActionsFolder8/createAddCommandActionsFolder8.js";
//import { createAddCommandActionsFolder9 } from "./pieces/createAddCommandActionsFolder9/createAddCommandActionsFolder9.js";

import { createAddCommandFolder6 } from "./pieces/createTemplateFolder6/createTemplateFolder6.js";

// PLOP_IMPORT_ACTION

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AddCommandActionss, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AddCommandActionsActions(promptData, appRootPath, plop) {
  //const AddCommandActionsFolder1 = createAddCommandActionsFolder1(promptData);
  //const AddCommandActionsFolder2 = createAddCommandActionsFolder2(promptData);
  //const AddCommandActionsFolder3 = createAddCommandActionsFolder3(promptData);
  //const AddCommandActionsFolder4 = createAddCommandActionsFolder4(promptData);
  //const AddCommandActionsFolder5 = createAddCommandActionsFolder5(promptData);
  //const AddCommandActionsFolder6 = createAddCommandActionsFolder6(promptData);
  //const AddCommandActionsFolder7 = createAddCommandActionsFolder7(promptData);
  //const AddCommandActionsFolder8 = createAddCommandActionsFolder8(promptData);
  //const AddCommandActionsFolder9 = createAddCommandActionsFolder9(promptData);

  // O ou + de dossiers d'actions PLOP
  // individuels de cette commande,
  // a ajouter dans src/AllActions/<CmdNameCamel>/pieces/PLOPActions/
  const AddCommandFolder6 = createAddCommandFolder6(promptData);

  return [
    // PLOP_IMPORT_ACTION_USE
    // O ou + de dossier d'actions PLOP individuelles
    ...AddCommandFolder6,
    //...AddCommandActionsFolder1,
    //...AddCommandActionsFolder2,
    //...AddCommandActionsFolder3,
    //...AddCommandActionsFolder4,
    //...AddCommandActionsFolder5,
    //...AddCommandActionsFolder6,
    //...AddCommandActionsFolder7,
    //...AddCommandActionsFolder8,
    //...AddCommandActionsFolder9,
  ];
}

export { AddCommandActionsActions };
