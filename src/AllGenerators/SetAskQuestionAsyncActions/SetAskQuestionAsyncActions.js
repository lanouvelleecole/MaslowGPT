import { openFilesInVSCode } from "./OpenVSCodeFiles/openVSCodeFiles.js";
import { setChatGPTGetter } from "./SetChatGPTGetter/setChatGPTGetter.js";
import { setCreateMaslowJSON } from "./SetCreateMaslowJSON/setCreateMaslowJSON.js";

/**
 *
 * @param {*} plop
 * @param {*} appRootPath
 *
 * Ceci initialise les actions asynchrones de récup de réponse ChatGPT
 */
function SetAskQuestionAsyncActions(plop, appRootPath) {
  // set l'action asynchrone
  // qui fait une requete de demande de
  // réponse de question (?! drole de formulation ;-), via chat gpt
  setChatGPTGetter(plop);

  // set l'action de suppression de données précedemment générées
  //deleteCaca(plop, appRootPath);

  // set l'action qui crée,
  // dans un folder dédié,
  // un fichier Maslow.json,
  // contenant des données importantes:
  // (historique de prompts,
  // réponse Chat GPT,
  // morceaux of interest, etc...)
  setCreateMaslowJSON(plop, appRootPath);

  // set l'action qui ouvre dans
  // VS Code le folder de l'appli, puis ouvre le fichier contenant
  // la fonction, et le fichier actualJsFile, si pas null
  openFilesInVSCode(plop, appRootPath);
}

export { SetAskQuestionAsyncActions };
