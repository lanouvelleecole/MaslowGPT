//import { createSetAiModelFolder1 } from "./pieces/createSetAiModelFolder1/createSetAiModelFolder1.js";
//import { createSetAiModelFolder2 } from "./pieces/createSetAiModelFolder2/createSetAiModelFolder2.js";
//import { createSetAiModelFolder3 } from "./pieces/createSetAiModelFolder3/createSetAiModelFolder3.js";
//import { createSetAiModelFolder4 } from "./pieces/createSetAiModelFolder4/createSetAiModelFolder4.js";
//import { createSetAiModelFolder5 } from "./pieces/createSetAiModelFolder5/createSetAiModelFolder5.js";
//import { createSetAiModelFolder6 } from "./pieces/createSetAiModelFolder6/createSetAiModelFolder6.js";
//import { createSetAiModelFolder7 } from "./pieces/createSetAiModelFolder7/createSetAiModelFolder7.js";
//import { createSetAiModelFolder8 } from "./pieces/createSetAiModelFolder8/createSetAiModelFolder8.js";
//import { createSetAiModelFolder9 } from "./pieces/createSetAiModelFolder9/createSetAiModelFolder9.js";

// PLOP_IMPORT_ACTION
import * as SetNewAIModelAction from "./pieces/PLOPActions/SetNewAIModel/SetNewAIModelActions.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de SetAiModels, si besoin.
 * Uncomment/comment selon tes feelings
 */
function SetAiModelActions(promptData, appRootPath, plop) {
  //const SetAiModelFolder1 = createSetAiModelFolder1(promptData);
  //const SetAiModelFolder2 = createSetAiModelFolder2(promptData);
  //const SetAiModelFolder3 = createSetAiModelFolder3(promptData);
  //const SetAiModelFolder4 = createSetAiModelFolder4(promptData);
  //const SetAiModelFolder5 = createSetAiModelFolder5(promptData);
  //const SetAiModelFolder6 = createSetAiModelFolder6(promptData);
  //const SetAiModelFolder7 = createSetAiModelFolder7(promptData);
  //const SetAiModelFolder8 = createSetAiModelFolder8(promptData);
  //const SetAiModelFolder9 = createSetAiModelFolder9(promptData);
  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
		//SetNewAIModelAction.SetNewAIModelAppendAction(promptData, appRootPath),
    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,
    //...SetAiModelFolder1,
    //...SetAiModelFolder2,
    //...SetAiModelFolder3,
    //...SetAiModelFolder4,
    //...SetAiModelFolder5,
    //...SetAiModelFolder6,
    //...SetAiModelFolder7,
    //...SetAiModelFolder8,
    //...SetAiModelFolder9,
  ].filter((elm) => elm);
}

export { SetAiModelActions };
