/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

import fs from "fs";

/**
 * DeleteFunctionBody (un string, le path du fichier qu'on veut modifier), seq (un string, le marqueur qui détermine si on efface le contenu du body de la fonction, ou pas.)
 *
 * But de cette fonction: Vide le body des fonctions ayant seq dans leur body.
 * Retourne: le code_source modifié, ou null si erreur.
 */
function DeleteFunctionBody(filePath, seq, do_we_delete) {
  let code_source = fs.readFileSync(filePath, "utf-8");
  let seq_index = code_source.indexOf(seq);

  //console.log(`first occurence of ${seq} is located at index ${seq_index}`);

  if (seq_index > -1 && do_we_delete == true) {
    let seq_end_index = seq_index + seq.length;
    let end_func_index =
      code_source.substr(seq_end_index).search(/\n\S/) + seq_end_index;
    const cancer = code_source.substring(seq_end_index, end_func_index);

    /*console.log(
      `cancer start from index ${seq_end_index} to ${end_func_index}: ${cancer}`
    );*/

    // effacer le body de la fonction
    code_source = code_source.replace(cancer, "");

    // sauvegarder les changements dans le fichier
    fs.writeFileSync(filePath, code_source);

    //console.log(`file contents after work: ${code_source}`);

    return code_source;
  }
}

export { DeleteFunctionBody };
