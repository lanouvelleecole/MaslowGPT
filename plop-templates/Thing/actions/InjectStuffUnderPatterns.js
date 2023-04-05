/* PLOP_INJECT_IMPORT */
import { DeletePreviousLookalikeLine } from "./DeletePreviousLookalikeLine/DeletePreviousLookalikeLine.js";

import fs from "fs";

import { GetSpacesBeforeCharacters } from "./GetSpacesBeforeCharacters.js";
import { ProperlyIndentString } from "./ProperlyIndentString.js";
import { RemoveEmptyLines } from "./RemoveExtraNewlines.js";

function InjectStuffUnderPatterns(filePath, patternsAndStuffs) {
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

    // le quelque chose qu'on souhaite ajouter en dessous de pattern.
    // (par ex: une ligne d'import)
    const stuffUnderPattern = patternAndStuff.stuffUnderPattern;

    // veux tu supprimer l'import précédent ?
    const deletePreviousStuff = patternAndStuff.deletePreviousStuff;
    const previousStuffPattern = patternAndStuff.previousStuffPattern;

    if (deletePreviousStuff == true) {
      // si oui, alors supprime la ligne contenant un import similaire à l'import frais
      // avec DeletePreviousLookalikeLine(filePath, previousStuffPattern)
      // Ceci supprime le sandwich de pattern previousStuffPattern,
      // ainsi que la ligne suivante, dans le code source de filePath
      const editedSource = DeletePreviousLookalikeLine(
        filePath,
        previousStuffPattern
      );

      // si qqchose à été supprimé, alors save
      if (editedSource != null) {
        fs.writeFileSync(filePath, editedSource);

        fileContents = editedSource;
      }
    }

    // how many spaces are there,
    // on the left side of this sequence of characters, in fileContents ?
    // 0 or more
    const howManySpacesB4Pat = GetSpacesBeforeCharacters(fileContents, pattern);

    // le contenu en dessous de pattern,
    // avec le même nombre d'espace après chaque \n ,
    // que le pattern en a à sa gauche.
    const stuffUnderPatternWIndent = ProperlyIndentString(
      `\n${stuffUnderPattern}`,
      howManySpacesB4Pat
    ).trimEnd();

    /*console.log(
      `pattern with stuff to be added: ${pattern}${stuffUnderPatternWIndent}`
    );*/

    // Si pattern existe dans fileContents,
    // alors ajoute le matos dans fileContents
    if (fileContents.includes(pattern)) {
      fileContents = fileContents.replace(
        pattern,
        `${pattern}${stuffUnderPatternWIndent}`
      );
    }
  }

  // Write modified contents back to file
  fs.writeFileSync(filePath, RemoveEmptyLines(fileContents), "utf8");

  return 42;
}

export { InjectStuffUnderPatterns };
