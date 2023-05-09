import { createDefaultApp } from "./CreateDefaultApp.js";
import path from "path";
import { userChoices } from "../../AllPrompts/GetAddDefaultAppTemplatePrompts/askIfWeCanDeleteAppJs.js";
import { supprimeMaillonsFaibles } from "./SupprimeMaillonsFaibles.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */

export function SupprimeCacaAndCreateDefaultApp(data, appRootPathFromC) {
  // suprimando ou pas ?
  const delete_or_not = data["delete_or_not"];

  // les paths des maillons faibles
  const appPiecesFolderPath = path.join(appRootPathFromC, "AppPieces");
  const appJSPath = path.join(appRootPathFromC, "App.js");
  const appTsxPath = path.join(appRootPathFromC, "App.tsx");
  const pagesFolderPath = path.join(appRootPathFromC, "src/pages");
  const reduxStateFolderPath = path.join(appRootPathFromC, "src/reduxState");

  // si on veut vraiment supprimer les maillons faibles.
  if (delete_or_not === userChoices.yesDelete) {
    supprimeMaillonsFaibles(
      appPiecesFolderPath,
      appJSPath,
      appTsxPath,
      pagesFolderPath,
      reduxStateFolderPath
    );

    // retournes les requetes PLOP d'ajout de fichiers.
    // crée aussi un state redux
    return createDefaultApp({ appRootPathFromC }).concat([]);
  } else {
    console.log("Ok ! On touche à rien.");

    return [];
  }
}
