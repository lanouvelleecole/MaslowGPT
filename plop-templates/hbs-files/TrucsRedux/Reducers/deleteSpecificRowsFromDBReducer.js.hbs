


// Le AsyncThunk qui à donné à manger à ce Reducer
import { deleteSpecificRowsFromDB } from "../AsyncThunks/deleteSpecificRowsFromDB";
import { deleteRowsInGroup } from "./deleteRowsInGroup";
import { deleteRowsInGroups } from "./deleteRowsInGroups";

/**
 *
 * @param {*} builder, bidule machin truc nécessaire
 *
 * Ce Reducer à comme travail de supprimer les rows
 * (selon rowName et rowValue)
 * en vrac, dans state.allRows, et dans les groupes, dans state.groups.
 */
export function deleteSpecificRowsFromDBReducer(builder) {
  // l'AsyncThunk est en train de préparer/charger les données.
  builder.addCase(deleteSpecificRowsFromDB.pending, (state, action) => {
    // indique que suppression en cours dans SQLITE, quand c'est = true
    state.loading = true;
  });

  // l'AsyncThunk à fini de supprimer les données dans SQLITE.
  // Les données rowName et rowValue
  // (retournées par l'AsyncThunk) sont dispo dans action.payload
  builder.addCase(deleteSpecificRowsFromDB.fulfilled, (state, action) => {
    // indique que chargement terminé
    state.loading = false;

    // supprime les pommes pourries du panier entier
    state.allRows = deleteRowsInGroup({
      group: state.allRows,
      rowName: action.payload.rowName,
      rowValue: action.payload.rowValue,
    });

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    state.allRows.sort((a, b) => a.itemIndex - b.itemIndex);

    // supprime les données dans les groupes, selon besoins
    state.groups = deleteRowsInGroups({
      groups: state.groups,
      rowName: action.payload.rowName,
      rowValue: action.payload.rowValue,
    });
  });

  // Une erreur est survenue dans l'AsyncThunk
  builder.addCase(deleteSpecificRowsFromDB.rejected, (state, action) => {
    // indique que chargement terminé
    state.loading = false;
  });
}
