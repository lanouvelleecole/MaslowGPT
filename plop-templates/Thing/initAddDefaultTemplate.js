import { userChoices } from "./prompts/askIfWeCanDeleteAppJs.js";

import fs from "fs";

import path from "path";
import { getNPMFolderRoot } from "../../getNPMFolderRoot.js";
import { createTemplateFromFolder } from "./actions/createTemplateFromFolder.js";
import { getAddDefaultAppTemplatePrompts } from "./getAddDefaultAppTemplatePrompts.js";

/**
 * Permet de créer un template de page avec données persistent (Sqlite et Redux)
 */
function createDefaultApp({ appRootPathFromC }) {
  const templateFolderPathFromAppRoot = `plop-templates/hbs-files/AppPieces`;
  const templateFolderPath = path.join(
    getNPMFolderRoot(),
    templateFolderPathFromAppRoot
  );

  const templateCreationParams = {
    templateFolderPath: templateFolderPath,
    templateFolderPathFromAppRoot: templateFolderPathFromAppRoot,
    creationFolderFromAppRoot: ``,
    wordsInFile: [
      {
        word: "App",
        replaceWordWith: "App",
      },
    ],

    wordsInHBSFileName: {
      word: "App",
      replaceWordWith: "App",
    },
  };

  return createTemplateFromFolder(templateCreationParams).concat(
    defaultTemplateInitAndCie()
  );
}

function defaultTemplateInitAndCie() {
  return [
    {
      type: "add",
      path: `${process.cwd()}/src/reduxState/reduxStore.js`,
      templateFile: "plop-templates/hbs-files/reduxStore.js.hbs",
      skipIfExists: true,
    },
  ];
}

function initAddDefaultTemplate(plop, appRootPathFromC) {
  plop.setGenerator("add-default-app-template", {
    description:
      "Ajoute un template de base (App.js avec stylesheet séparé du component) pour notre application",

    /**
     * Dans l'array ci dessous,
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre template
     */
    prompts: getAddDefaultAppTemplatePrompts(),
    actions: function (data) {
      // suprimando ou pas ?
      const delete_or_not = data["delete_or_not"];

      // les paths des maillons faibles
      const appPiecesFolderPath = path.join(appRootPathFromC, "AppPieces");
      const appJSPath = path.join(appRootPathFromC, "App.js");
      const appTsxPath = path.join(appRootPathFromC, "App.tsx");
      const pagesFolderPath = path.join(appRootPathFromC, "src/pages");
      const reduxStateFolderPath = path.join(
        appRootPathFromC,
        "src/reduxState"
      );

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
    },
  });
}

// supprime la merde inutile
function supprimeMaillonsFaibles(
  appPiecesFolderPath,
  appJSPath,
  appTsxPath,
  pagesFolderPath,
  reduxStateFolderPath
) {
  // print un message disant à l'user ce qui va être détruit
  printDeletionPrompt();

  // un sandwich de texte
  console.log("**********");

  // si app.js existe, supprime le
  deleteFileIfExisting(appJSPath);
  deleteFileIfExisting(appTsxPath);
  deleteFolderIfExisting(pagesFolderPath);
  deleteFolderIfExisting(reduxStateFolderPath);
  deleteFolderIfExisting(appPiecesFolderPath);

  // un sandwich de texte
  console.log("**********");
}

function deleteFileIfExisting(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);

    console.log(`Suppression de ${filePath} effectuée avec succès !!`);
  }
}

function deleteFolderIfExisting(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });

    console.log(`Suppression de ${folderPath} effectuée avec succès !!`);
  }
}

function printDeletionPrompt() {
  console.log("**********");
  console.log(
    "Ok ! On supprime l'ancien App.js (et aussi App.style.js, et AppInit.js, et FetchEverythingNeeded.js, si existant), puis on génère du frais."
  );
  console.log("**********");
}

export { initAddDefaultTemplate };
export { deleteFileIfExisting };
