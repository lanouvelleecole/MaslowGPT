import { store } from "src/reduxState/reduxStore";

// permet exécution optionnelle de callback
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible";

// Le AsyncThunk de modification/triage de toutes les données stockées dans TestPageState.
import { updateSpecificRowsFromDB } from "../AsyncThunks/updateSpecificRowsFromDB";

// Le nom de la DB Sqlite,
// ainsi qu'une description des noms/types des rows de cette DB Sqlite
import { rowNamesAndTypes, databaseName } from "../DatabaseInfo";

/**
 * @param {*} row, l'objet à modifier dans la DB.
 * @param {*} rowName, le nom de row qui détermine le maillon faible
 * @param {*} rowValue, la valeur du row qui détermine le maillon faible
 * @param {*} onSuccess, callback si tout c bien pacé
 * @param {*} onError, callback si ca pue
 *
 * @returns combien de rows ont été modifiés.
 *
 */
export const UpdateSpecificRowsFromDB = ({
  row,
  rowName,
  rowValue,
  onSuccess,
  onError,
}) => {
  // Promise nous permet de pouvoir retourner la liste de données
  // de manière asynchrone.
  return new Promise((resolve, reject) => {
    // dans Redux, on lance un AsyncThunk,
    // qui va premièrement modifier les données,
    // stockées dans SQLITE.
    //
    // Cet AsyncThunk va ensuite transmettre ces données (rows)
    // au Reducer correspondant, qui va lui modifier les données dans les groupes (via initialState.groups).
    //
    // Ce Reducer va aussi modifier la liste entière de rows, (via initialState.allRows)
    store
      .dispatch(
        // Ze AsynchThunk iz here
        updateSpecificRowsFromDB({
          dbName: databaseName,
          row,
          rowName,
          rowValue,
          rowNamesAndTypes,
        })
      )
      .unwrap()
      /**
       * cette callback, s'execute lorsque les
       * données ont été ajoutées/réparties dans Sqlite/Redux
       */
      .then((qtyAffected) => {
        resolve(qtyAffected);

        RunIfPossible({ func: onSuccess, args: qtyAffected });
      })
      /** si bobo durant ajouts/répartitions */
      .catch((e) => {
        reject(e);

        RunIfPossible({ func: onError, args: e });
      });
  });
};
