import { createThing } from "./actions/createThing.js";
import { Constants } from "./AddQuestion/pieces/Constants.js";

function _getActionsForThingToBeCreated(data, appRootPath, plop) {
  // le nom de la chose
  // (sera converti en pascalCase)
  const thingName = data["name"];

  // que veut l'utilisateur
  // (component, page, service, ou repo strings)
  const what_we_wanna_do = data["what_we_wanna_do"];

  // partant du dossier src de l'appli,
  // dans quel sous dossier l'user veut il créer

  // le sous dossier qu'on va actuellement utiliser, partant de src
  let actualSubfolder = data["ask_for_subfolder"];

  // le path du fichier .js dans lequel on utilise
  // la chose. ou null, si "On veut rien, capiche"
  const jsFileChoice = data["ask_for_js_file"];
  let actualJsFile = jsFileChoice != Constants.noChoice ? jsFileChoice : null;

  // les différentes actions à mener pour
  // créer notre chose
  let actions = [];

  // crée la chose
  actions.push(
    ...createThing(
      actualSubfolder,
      actualJsFile,
      what_we_wanna_do,
      thingName,
      appRootPath,
      data,
      plop
    )
  );

  // dans la console, affiche une ligne
  // permettant d'utiliser cette chose dans ton code
  //printLineOfCodeForUse(actualSubfolder, thingName, what_we_wanna_do);

  return actions;
}

export { _getActionsForThingToBeCreated };
