import { deleteCaca } from "./deleteCaca.js";
import { openFilesInVSCode } from "./openVSCodeFiles.js";
import { setChatGPTFunctionGetter } from "./setChatGPTFunctionGetter.js";
import { setCodeUsageIfNeeded } from "./setCodeUsageIfNeeded.js";
import { setCreateFunctionAction } from "./setCreateFunctionAction.js";
import { setCreateMaslowJSON } from "./setCreateMaslowJSON.js";

function setAIFunctionActions(plop, appRootPath) {
  // set l'action asynchrone
  // qui fait une requete de demande de
  // création de fonction via chat gpt
  setChatGPTFunctionGetter(plop);

  // set l'action de traduction de texte via IA
  //TranslateTextRequest(plop);

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

export { setAIFunctionActions };
