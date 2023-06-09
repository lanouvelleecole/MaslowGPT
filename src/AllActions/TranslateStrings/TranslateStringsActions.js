//import { createTranslateStringsFolder1 } from "./pieces/createTranslateStringsFolder1/createTranslateStringsFolder1.js";
//import { createTranslateStringsFolder2 } from "./pieces/createTranslateStringsFolder2/createTranslateStringsFolder2.js";
//import { createTranslateStringsFolder3 } from "./pieces/createTranslateStringsFolder3/createTranslateStringsFolder3.js";
//import { createTranslateStringsFolder4 } from "./pieces/createTranslateStringsFolder4/createTranslateStringsFolder4.js";
//import { createTranslateStringsFolder5 } from "./pieces/createTranslateStringsFolder5/createTranslateStringsFolder5.js";
//import { createTranslateStringsFolder6 } from "./pieces/createTranslateStringsFolder6/createTranslateStringsFolder6.js";
//import { createTranslateStringsFolder7 } from "./pieces/createTranslateStringsFolder7/createTranslateStringsFolder7.js";
//import { createTranslateStringsFolder8 } from "./pieces/createTranslateStringsFolder8/createTranslateStringsFolder8.js";
//import { createTranslateStringsFolder9 } from "./pieces/createTranslateStringsFolder9/createTranslateStringsFolder9.js";

// PLOP_IMPORT_ACTION
import * as ExtractSrcObjectAction from "./pieces/PLOPActions/ExtractSrcObject/ExtractSrcObjectActions.js";
import * as TranslateSrcAction from "./pieces/PLOPActions/TranslateSrc/TranslateSrcActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de TranslateStringss, si besoin.
 * Uncomment/comment selon tes feelings
 */
function TranslateStringsActions(promptData, appRootPath, plop) {
  //const TranslateStringsFolder1 = createTranslateStringsFolder1(promptData);
  //const TranslateStringsFolder2 = createTranslateStringsFolder2(promptData);
  //const TranslateStringsFolder3 = createTranslateStringsFolder3(promptData);
  //const TranslateStringsFolder4 = createTranslateStringsFolder4(promptData);
  //const TranslateStringsFolder5 = createTranslateStringsFolder5(promptData);
  //const TranslateStringsFolder6 = createTranslateStringsFolder6(promptData);
  //const TranslateStringsFolder7 = createTranslateStringsFolder7(promptData);
  //const TranslateStringsFolder8 = createTranslateStringsFolder8(promptData);
  //const TranslateStringsFolder9 = createTranslateStringsFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    ExtractSrcObjectAction.ExtractSrcObjectAsyncAction(promptData, appRootPath),
    TranslateSrcAction.TranslateSrcAsyncAction(promptData, appRootPath),
    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...TranslateStringsFolder1,
    //...TranslateStringsFolder2,
    //...TranslateStringsFolder3,
    //...TranslateStringsFolder4,
    //...TranslateStringsFolder5,
    //...TranslateStringsFolder6,
    //...TranslateStringsFolder7,
    //...TranslateStringsFolder8,
    //...TranslateStringsFolder9,
  ].filter((elm) => elm);
}

export { TranslateStringsActions };
