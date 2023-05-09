/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// DeletePreviousLookalikeLine(): Efface la ligne de code identique, ou similaire à seq, dans le code source
// du fichier situé au path filePath.
// Entrées de la fonction: filePath (un string, le path du fichier qu'on veut modifier),
// seq (un string, la ligne de code qu'on souhaite effacer).
// Sorties de la fonction: code_source modifié, ou null si erreur.
import fs from "fs";

function DeletePreviousLookalikeLine(filePath, pattern, previousLine) {
  try {
    // Lire le contenu du fichier
    let codeSource = fs.readFileSync(filePath, "utf-8");

    // Trouver l'index de l'apparition du pattern
    const patternStartIndex = codeSource.indexOf(pattern);

    // Si le pattern n'est pas trouvé, retourner null
    if (patternStartIndex === -1) {
      //console.log("Pattern non trouvé dans le fichier");
      return null;
    }

    // Trouver l'index de la fin du pattern
    const patternEndIndex = codeSource.indexOf(
      pattern,
      patternStartIndex + pattern.length
    );

    // Si la fin du pattern n'est pas trouvée, retourner null
    if (patternEndIndex === -1) {
      //console.log("Fin du pattern non trouvée dans le fichier");
      return null;
    }

    //console.log(codeSource);

    // Extraire le code source sans la partie entre les patterns
    codeSource =
      codeSource.substring(0, patternStartIndex) +
      codeSource.substring(patternEndIndex + pattern.length);

    /*console.log(
      `le vieux truc: ${codeSource.substring(
        patternStartIndex,
        patternEndIndex
      )}`
    );*/

    // Retourner le code source modifié
    return codeSource;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export { DeletePreviousLookalikeLine };
