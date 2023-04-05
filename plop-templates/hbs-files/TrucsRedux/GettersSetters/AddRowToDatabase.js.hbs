import { store } from "src/reduxState/reduxStore";

// permet exécution optionnelle de callback
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// Le AsyncThunk de ajout/triage de row stocké dans TestPage.
import { addRowToDatabase } from "../AsyncThunks/addRowToDatabase";

// Le nom de la DB Sqlite,
// ainsi qu'une description des noms/types des rows de cette DB Sqlite
import { rowNamesAndTypes, databaseName } from "../DatabaseInfo";

/**
 * @param {*} row, l'objet à ajouter dans la DB.
 * @param {*} onSuccess, callback si tout c bien pacé
 * @param {*} onError, callback si ca pue
 *
 * @returns le row ajouté {key: value}.
 *
 * Ajoute un row dans la DB SQLITE, et dans Redux.
 *
 * Aussi, on en profite pour répartir le row dans un groupe,
 * selon row.groupName, si existant
 */
export const AddRowToDatabase = ({ row, onSuccess, onError }) => {
  // Promise nous permet de pouvoir retourner le row
  // de manière asynchrone.
  return new Promise((resolve, reject) => {
    // dans Redux, on lance un AsyncThunk,
    // qui va premièrement ajouter le row,
    // dans SQLITE.
    //
    // Cet AsyncThunk va ensuite transmettre ces données (le row)
    // au Reducer correspondant, qui va lui répartir les données dans un groupe (via initialState.groups).
    //
    // Ce Reducer va aussi stocker le row, (dans initialState.allRows)
    store
      .dispatch(
        // Ze AsynchThunk iz here
        addRowToDatabase({
          dbName: databaseName,
          row,
          rowNamesAndTypes,
        })
      )
      .unwrap()
      /**
       * cette callback, s'execute lorsque les
       * données ont été ajoutées/réparties dans Sqlite/Redux
       */
      .then((row) => {
        resolve(row);

        RunIfPossible({ func: onSuccess, args: row });
      })
      /** si bobo durant ajouts/répartitions */
      .catch((e) => {
        reject(e);

        RunIfPossible({ func: onError, args: e });
      });
  });
};
