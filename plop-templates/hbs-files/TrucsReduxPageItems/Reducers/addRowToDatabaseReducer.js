


// Le AsyncThunk qui à donné à manger à ce Reducer
import { addRowToDatabase } from "../AsyncThunks/addRowToDatabase";
import { addRowToGroupIfNeeded } from "./addRowToGroupIfNeeded";

/**
 *
 * @param {*} builder, bidule machin truc nécessaire
 *
 * Ce Reducer à comme travail de stocker ce row,
 * en vrac, dans state.allRows, et en groupe, dans state.groups.
 */
export function addRowToDatabaseReducer(builder) {
  // l'AsyncThunk est en train de préparer/charger les données.
  builder.addCase(addRowToDatabase.pending, (state, action) => {
    // indique que chargement en cours, quand c'est = true
    state.loading = true;
  });

  // l'AsyncThunk à fini de charger les données.
  // Les données (retournées par l'AsyncThunk) sont dispo dans action.payload
  builder.addCase(addRowToDatabase.fulfilled, (state, action) => {
    // indique que chargement terminé
    state.loading = false;

    // le row tout juste ajouté dans sqlite.
    // maintenant, on l'ajote dans le state Redux.
    const row = action.payload;

    // stocke les données (row) en vrac
    state.allRows.push(row);

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    state.allRows.sort((a, b) => a.itemIndex - b.itemIndex);

    // répartit les données en groupes, selon besoins
    addRowToGroupIfNeeded(row, state);
  });

  // Une erreur est survenue dans l'AsyncThunk
  builder.addCase(addRowToDatabase.rejected, (state, action) => {
    // indique que chargement terminé
    state.loading = false;
  });
}
