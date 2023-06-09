import { deleteCaca } from "./DeleteCaca/deleteCaca.js";
import { openFilesInVSCode } from "./OpenVSCodeFiles/openVSCodeFiles.js";
import { setChatGPTFunctionGetter } from "./SetChatGPTGetter/setChatGPTFunctionGetter.js";
import { setCodeUsageIfNeeded } from "./SetCodeUsageIfNeeded/setCodeUsageIfNeeded.js";
import { setCreateFunctionAction } from "./SetCreateFunctionAction/setCreateFunctionAction.js";
import { setCreateMaslowJSON } from "./SetCreateMaslowJSON/setCreateMaslowJSON.js";

function AddCommandAsynchronousActions(plop, appRootPath) {
  // set l'action asynchrone
  // qui fait une requete de demande de
  // création de fonction via chat gpt
  setChatGPTFunctionGetter(plop);

  // set l'action de suppression de caca
  deleteCaca(plop, appRootPath);

  // set l'action qui crée,
  // dans un folder dédié,
  // un fichier contenant la fonction,
  setCreateFunctionAction(plop, appRootPath);

  // set l'action qui crée,
  // dans un folder dédié,
  // un fichier Maslow.json,
  // contenant des données importantes:
  // (historique de prompts,
  // réponse Chat GPT,
  // morceaux of interest, etc...)
  setCreateMaslowJSON(plop, appRootPath);

  // set l'action qui crée un import,
  // et une variable contenant
  // un call de cette fonction,
  // si actualJsFile is not null
  setCodeUsageIfNeeded(plop, appRootPath);

  // set l'action qui ouvre dans
  // VS Code le folder de l'appli, puis ouvre le fichier contenant
  // la fonction, et le fichier actualJsFile, si pas null
  openFilesInVSCode(plop, appRootPath);
}

export { AddCommandAsynchronousActions };
