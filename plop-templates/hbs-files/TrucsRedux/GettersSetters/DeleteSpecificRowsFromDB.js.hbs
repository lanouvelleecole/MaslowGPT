import { store } from "src/reduxState/reduxStore";

// permet exécution optionnelle de callback
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// Le AsyncThunk de suppression/triage de données stockées dans WorkListsState.
import { deleteSpecificRowsFromDB } from "../AsyncThunks/deleteSpecificRowsFromDB";

// Le nom de la DB Sqlite,
// ainsi qu'une description des noms/types des rows de cette DB Sqlite
import { rowNamesAndTypes, databaseName } from "../DatabaseInfo";

/**
 * @param {*} rowName, le nom de row qui détermine le maillon faible
 * @param {*} rowValue, la valeur du row qui détermine le maillon faible
 * @param {*} onSuccess, callback si tout c bien pacé
 * @param {*} onError, callback si ca pue
 *
 * @returns la quantité d'items supprimés.
 *
 * Aussi, on en profite pour supprimer les rows dans les groupes
 * si besoin
 */
export const DeleteSpecificRowsFromDB = ({
  rowName,
  rowValue,
  onSuccess,
  onError,
}) => {
  // Promise nous permet de pouvoir retourner la liste de données
  // de manière asynchrone.
  return new Promise((resolve, reject) => {
    // dans Redux, on lance un AsyncThunk,
    // qui va premièrement supprimer les données,
    // stockées dans SQLITE.
    //
    // Cet AsyncThunk va ensuite transmettre ces données (rowName, rowValue)
    // au Reducer correspondant, qui va lui supprimer les données dans les groupes (via initialState.groups).
    // et aussi dans le gros panier .allRows
    store
      .dispatch(
        // Ze AsynchThunk iz here
        deleteSpecificRowsFromDB({
          dbName: databaseName,
          rowName,
          rowValue,
          rowNamesAndTypes,
        })
      )
      .unwrap()
      /**
       * cette callback, s'execute lorsque les
       * données ont été supprimées dans Sqlite/Redux
       */
      .then((rowData) => {
        resolve(rowData.qtyAffected);

        RunIfPossible({ func: onSuccess, args: rowData.qtyAffected });
      })
      /** si bobo durant ajouts/répartitions */
      .catch((e) => {
        reject(e);

        RunIfPossible({ func: onError, args: e });
      });
  });
};
