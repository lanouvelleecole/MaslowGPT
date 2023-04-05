import { getStoredData, writeData } from "./data-saver/data-saver.js";
import path from "path";

/**
 * @param {*} appRootPath
 * le path racine du dossier de l'appli
 *
 * @param {*} userDataName
 * le nom des données souhaitées
 * (le .name du prompt PLOP)
 *
 * @param {*} userDataFromPrompt
 * les données fraichement fournies via prompt PLOP
 * (peut etre vide)
 *
 * @returns
 * les données appropriées selon que y'a historique ou pas
 */
function getAppropriatePromptData(
  appRootPath,
  userDataName,
  userDataFromPrompt
) {
  // le path du fichier json contenant les
  // paths utiles
  let jsonDataPath = path.join(
    appRootPath,
    "plop-templates/Thing/AddQuestion/data-saver/data.json"
  );

  // l'objet JSON stocké localement
  let storedData = getStoredData(jsonDataPath);

  // les données spécifiques stockées dans l'objet JSON
  let specificStoredData = storedData[userDataName];

  // si l'user a fourni des données fresh (via prompt)
  if (userDataFromPrompt != null && userDataFromPrompt.length > 0) {
    // retourne données fraichement fournies par user
    // ces données seront stockées dans l'historique
    // sauvegarde les données appropriées
    storedData[userDataName] = userDataFromPrompt;

    writeData(jsonDataPath, storedData);

    return userDataFromPrompt;
  }

  // si il existe localement (dans le fichier .json)
  // des données correspondantes
  else if (specificStoredData != null && specificStoredData.length > 0) {
    // retourne le
    return specificStoredData;
  }

  // sinon retourne un string vide
  else {
    return "";
  }
}
export { getAppropriatePromptData };
