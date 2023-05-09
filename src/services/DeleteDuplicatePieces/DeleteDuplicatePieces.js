/* PLOP_INJECT_IMPORT */
import { DeletePreviousLookalikeLine } from "../DeletePreviousLookalikeLine/DeletePreviousLookalikeLine.js";

import fs from "fs";

function DeleteDuplicatePieces(filePath, patternsAndStuffs) {
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  // Read file contents
  let fileContents = fs.readFileSync(filePath, "utf8");

  // Loop through patternsAndStuffs array
  for (const patternAndStuff of patternsAndStuffs) {
    // le pattern, un string en dessous duquel
    // on ajoute qqchose
    const pattern = patternAndStuff.pattern;

    // veux tu supprimer l'import précédent ?
    const deletePreviousStuff = patternAndStuff.deletePreviousStuff;

    if (deletePreviousStuff == true) {
      // si oui, alors supprime la ligne contenant un import similaire à l'import frais
      // avec DeletePreviousLookalikeLine(filePath, previousStuffPattern)
      // Ceci supprime le sandwich de pattern previousStuffPattern,
      // ainsi que la ligne suivante, dans le code source de filePath
      const editedSource = DeletePreviousLookalikeLine(filePath, pattern);

      if (editedSource != null) {
        fs.writeFileSync(filePath, editedSource);

        fileContents = editedSource;
      }
    }
  }

  //console.log(`file contents after all work: ${fileContents}`);

  // Write modified contents back to file
  fs.writeFileSync(filePath, fileContents, "utf8");

  return 42;
}

export { DeleteDuplicatePieces };
