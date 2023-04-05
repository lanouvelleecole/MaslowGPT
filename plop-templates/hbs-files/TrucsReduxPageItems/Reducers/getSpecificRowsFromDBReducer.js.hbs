


// Le AsyncThunk qui à donné à manger à ce Reducer
import { getSpecificRowsFromDB } from "../AsyncThunks/getSpecificRowsFromDB";
import { organizeRowsInGroups } from "./organizeRowsInGroups";

/**
 *
 * @param {*} builder, bidule machin truc nécessaire
 *
 * Ce Reducer à comme travail de récupérer les rows,
 * selon rowName et rowValue,
 * dans state.allRows,
 * et en groupes, dans state.groups.
 */
export function getSpecificRowsFromDBReducer(builder) {
  // l'AsyncThunk est en train de préparer/charger les données.
  builder.addCase(getSpecificRowsFromDB.pending, (state, action) => {
    // indique que chargement en cours, quand c'est = true
    state.loading = true;
  });

  // l'AsyncThunk à fini de charger les données.
  // Les données (retournées par l'AsyncThunk) sont dispo dans action.payload
  builder.addCase(getSpecificRowsFromDB.fulfilled, (state, action) => {
    // indique que chargement terminé
    state.loading = false;

    // stocke les données (rows) en vrac
    state.allRows = action.payload;

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    state.allRows.sort((a, b) => a.itemIndex - b.itemIndex);

    // répartit les données en groupes, selon besoins
    state.groups = organizeRowsInGroups({
      rows: action.payload,
    });
  });

  // Une erreur est survenue dans l'AsyncThunk
  builder.addCase(getSpecificRowsFromDB.rejected, (state, action) => {
    // indique que chargement terminé
    state.loading = false;
  });
}
