//import { createAskQuestionFolder1 } from "./pieces/createAskQuestionFolder1/createAskQuestionFolder1.js";
//import { createAskQuestionFolder2 } from "./pieces/createAskQuestionFolder2/createAskQuestionFolder2.js";
//import { createAskQuestionFolder3 } from "./pieces/createAskQuestionFolder3/createAskQuestionFolder3.js";
//import { createAskQuestionFolder4 } from "./pieces/createAskQuestionFolder4/createAskQuestionFolder4.js";
//import { createAskQuestionFolder5 } from "./pieces/createAskQuestionFolder5/createAskQuestionFolder5.js";
//import { createAskQuestionFolder6 } from "./pieces/createAskQuestionFolder6/createAskQuestionFolder6.js";
//import { createAskQuestionFolder7 } from "./pieces/createAskQuestionFolder7/createAskQuestionFolder7.js";
//import { createAskQuestionFolder8 } from "./pieces/createAskQuestionFolder8/createAskQuestionFolder8.js";
//import { createAskQuestionFolder9 } from "./pieces/createAskQuestionFolder9/createAskQuestionFolder9.js";

// PLOP_IMPORT_ACTION

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de AskQuestions, si besoin.
 * Uncomment/comment selon tes feelings
 */
function AskQuestionActions(promptData, appRootPath, plop) {
  //const AskQuestionFolder1 = createAskQuestionFolder1(promptData);
  //const AskQuestionFolder2 = createAskQuestionFolder2(promptData);
  //const AskQuestionFolder3 = createAskQuestionFolder3(promptData);
  //const AskQuestionFolder4 = createAskQuestionFolder4(promptData);
  //const AskQuestionFolder5 = createAskQuestionFolder5(promptData);
  //const AskQuestionFolder6 = createAskQuestionFolder6(promptData);
  //const AskQuestionFolder7 = createAskQuestionFolder7(promptData);
  //const AskQuestionFolder8 = createAskQuestionFolder8(promptData);
  //const AskQuestionFolder9 = createAskQuestionFolder9(promptData);

  const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE
    REQUETE_CHAT_GPT_QUESTION,
    CREATION_HISTORIQUE,
    OUVRE_FICHIERS_CREES,
    //...AskQuestionFolder1,
    //...AskQuestionFolder2,
    //...AskQuestionFolder3,
    //...AskQuestionFolder4,
    //...AskQuestionFolder5,
    //...AskQuestionFolder6,
    //...AskQuestionFolder7,
    //...AskQuestionFolder8,
    //...AskQuestionFolder9,
  ];
}

export { AskQuestionActions };
