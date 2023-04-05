import fs from "fs";
import { getProperFolderName } from "../Thing/prompts/askWhatUserWants";

function getStoredData(jsonDataPath) {
  let rawdata = fs.readFileSync(jsonDataPath);
  let data = JSON.parse(rawdata);

  return data;
}

function writeData(jsonDataPath, jsonData) {
  let data = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync(jsonDataPath, data);
}

/**
 *
 * @param {*} jsonDataPath
 * le path du fichier json stockant les paths
 *
 * @param {*} userJsPathViaPrompt
 * le path du fichier .js
 * ou on utilise la chose
 *
 * @returns
 * le path du fichier ou on utilise la chose
 */
function getJsFile(jsonDataPath, userJsPathViaPrompt) {
  // l'objet stocké localement
  let data = getStoredData(jsonDataPath);

  // le dossier contenant
  // le path du fichier .js ou
  // on utilise la chose
  let jsFile = data["js_file"];

  // si le path user (via prompt) existe
  if (userJsPathViaPrompt != null && userJsPathViaPrompt.length > 0) {
    return userJsPathViaPrompt;
  }
  // si il existe localement
  // un path de fichier .js ou créer la chose
  else if (jsFile != null) {
    // retourne le
    return jsFile;
  }
  // sinon retourne le path
  // par défaut, ou le path
  // fourni par l'user
  else {
    // sinon App.js par défaut
    return "App.js";
  }
}

/**
 * @param {*} jsonDataPath
 * le path du fichier json
 * contenant les paths de fichier js et dossier
 *
 * @param {*} theThingWeWant
 * le type de chose qu'on veut.
 * permet de déterminer quel
 * est le sous dossier par défaut
 * quand on a aucun sous dossier dispo
 * (via prompt et DB)
 *
 * @param {*} userSubfolderFromPrompt
 * le sous dossier fourni via prompt
 * (peut etre vide)
 *
 * @returns
 * le dossier à utiliser dans la création de chose,
 * et par la même occasion,
 * le dossier à stocker dans la DB
 */
function getThingFolder(jsonDataPath, theThingWeWant, userSubfolderFromPrompt) {
  // l'objet stocké localement
  let data = getStoredData(jsonDataPath);

  // le dossier contenant la chose
  let thingFolder = data["thing_folder"];

  // si l'user a fourni un path fresh
  if (userSubfolderFromPrompt != null && userSubfolderFromPrompt.length > 0) {
    return userSubfolderFromPrompt;
  }
  // si il existe localement (dans le fichier .json)
  // un path ou créer la chose
  else if (thingFolder != null) {
    // retourne le
    return thingFolder;
  }
  // sinon retourne le path
  // par défaut, ou le path
  // fourni par l'user
  else {
    return getProperFolderName(theThingWeWant);
  }
}

export { getStoredData };
export { writeData };
export { getJsFile };
export { getThingFolder };
