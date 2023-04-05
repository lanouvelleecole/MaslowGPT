


// Le AsyncThunk qui à donné à manger à ce Reducer
import { updateSpecificRowsFromDB } from "../AsyncThunks/updateSpecificRowsFromDB";
import { updateRowsInGroup } from "./updateRowsInGroup";
import { updateRowsInGroups } from "./updateRowsInGroups";

/**
 *
 * @param {*} builder, bidule machin truc nécessaire
 *
 * Ce Reducer à comme travail de mettre à jour les rows,
 * en vrac, dans state.allRows, et dans les groupes, dans state.groups.
 */
export function updateSpecificRowsFromDBReducer(builder) {
  // l'AsyncThunk est en train de modifier les données dans SQLITE.
  builder.addCase(updateSpecificRowsFromDB.pending, (state, action) => {
    // indique que modif en cours, quand c'est = true
    state.loading = true;
  });

  // l'AsyncThunk à fini de modifier les données.
  // Les données row, rowName et rowValue (retournées par l'AsyncThunk) sont dispo dans action.payload
  builder.addCase(updateSpecificRowsFromDB.fulfilled, (state, action) => {
    // indique que chargement terminé
    state.loading = false;

    // met à jour les rows dans le gros panier
    state.allRows = updateRowsInGroup({
      group: state.allRows,
      row: action.payload.row,
      rowName: action.payload.rowName,
      rowValue: action.payload.rowValue,
    });

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    state.allRows.sort((a, b) => a.itemIndex - b.itemIndex);

    // met à jour les rows dans les petits paniers
    state.groups = updateRowsInGroups({
      groups: state.groups,
      row: action.payload.row,
      rowName: action.payload.rowName,
      rowValue: action.payload.rowValue,
    });
  });

  // Une erreur est survenue dans l'AsyncThunk
  builder.addCase(updateSpecificRowsFromDB.rejected, (state, action) => {
    // indique que chargement terminé
    state.loading = false;
  });
}
