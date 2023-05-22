//import { createAddCommandPromptsFolder1 } from "./pieces/createAddCommandPromptsFolder1/createAddCommandPromptsFolder1.js";
//import { createAddCommandPromptsFolder2 } from "./pieces/createAddCommandPromptsFolder2/createAddCommandPromptsFolder2.js";
//import { createAddCommandPromptsFolder3 } from "./pieces/createAddCommandPromptsFolder3/createAddCommandPromptsFolder3.js";
//import { createAddCommandPromptsFolder4 } from "./pieces/createAddCommandPromptsFolder4/createAddCommandPromptsFolder4.js";
//import { createAddCommandPromptsFolder5 } from "./pieces/createAddCommandPromptsFolder5/createAddCommandPromptsFolder5.js";
//import { createAddCommandPromptsFolder6 } from "./pieces/createAddCommandPromptsFolder6/createAddCommandPromptsFolder6.js";
//import { createAddCommandPromptsFolder7 } from "./pieces/createAddCommandPromptsFolder7/createAddCommandPromptsFolder7.js";
//import { createAddCommandPromptsFolder8 } from "./pieces/createAddCommandPromptsFolder8/createAddCommandPromptsFolder8.js";
//import { createAddCommandPromptsFolder9 } from "./pieces/createAddCommandPromptsFolder9/createAddCommandPromptsFolder9.js";

import { createAddCommandFolder2 } from "../AddCommandActions/pieces/createTemplateFolder2/createAddCommandFolder2.js";

// PLOP_IMPORT_ACTION

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AddCommandPromptss, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AddCommandPromptsActions(promptData, appRootPath, plop) {
  //const AddCommandPromptsFolder1 = createAddCommandPromptsFolder1(promptData);
  //const AddCommandPromptsFolder2 = createAddCommandPromptsFolder2(promptData);
  //const AddCommandPromptsFolder3 = createAddCommandPromptsFolder3(promptData);
  //const AddCommandPromptsFolder4 = createAddCommandPromptsFolder4(promptData);
  //const AddCommandPromptsFolder5 = createAddCommandPromptsFolder5(promptData);
  //const AddCommandPromptsFolder6 = createAddCommandPromptsFolder6(promptData);
  //const AddCommandPromptsFolder7 = createAddCommandPromptsFolder7(promptData);
  //const AddCommandPromptsFolder8 = createAddCommandPromptsFolder8(promptData);
  //const AddCommandPromptsFolder9 = createAddCommandPromptsFolder9(promptData);

  // O ou + de dossiers de prompts
  // individuels de cette commande,
  // a ajouter dans src/AllPrompts/<CmdName>/prompts/
  const AddCommandFolder2 = createAddCommandFolder2(promptData);

  return [
    // PLOP_IMPORT_ACTION_USE
    ...AddCommandFolder2,
    //...AddCommandPromptsFolder1,
    //...AddCommandPromptsFolder2,
    //...AddCommandPromptsFolder3,
    //...AddCommandPromptsFolder4,
    //...AddCommandPromptsFolder5,
    //...AddCommandPromptsFolder6,
    //...AddCommandPromptsFolder7,
    //...AddCommandPromptsFolder8,
    //...AddCommandPromptsFolder9,
  ];
}

export { AddCommandPromptsActions };
