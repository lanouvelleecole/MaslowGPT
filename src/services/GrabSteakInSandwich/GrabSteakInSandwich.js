/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import fs from "fs";

function GrabSteakInSandwich({ filePath, patternStart, patternEnd }) {
  try {
    // Lire le contenu du fichier
    let codeSource = fs.readFileSync(filePath, "utf-8");

    // Trouver l'index de l'apparition du pattern
    const patternStartIndex = codeSource.indexOf(patternStart);

    // Si le pattern n'est pas trouvé, retourner null
    if (patternStartIndex === -1) {
      //console.log("Pattern non trouvé dans le fichier");
      return null;
    }

    // Trouver l'index de la fin du pattern
    const patternEndIndex = codeSource.indexOf(
      patternEnd,
      patternStartIndex + patternStart.length
    );

    // Si la fin du pattern n'est pas trouvée, retourner null
    if (patternEndIndex === -1) {
      //console.log("Fin du pattern non trouvée dans le fichier");
      return null;
    }

    //console.log(codeSource);

    // Extraire le code source situe entre les patterns
    const codeSourcePiece = codeSource.substring(
      patternStartIndex + patternStart.length,
      patternEndIndex
    );

    /*console.log(
      `le vieux truc: ${codeSource.substring(
        patternStartIndex,
        patternEndIndex
      )}`
    );*/

    // Retourner le code source modifié
    return codeSourcePiece;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { GrabSteakInSandwich };
