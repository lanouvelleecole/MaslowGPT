


/* PLOP_INJECT_IMPORT */

// permet de créer un gros sandwich de reducers
// individuels.
import { createSlice } from "@reduxjs/toolkit";

// Les Reducers individuels (Redux)
import { addRowToDatabaseReducer } from "./Reducers/addRowToDatabaseReducer";
import { deleteSpecificRowsFromDBReducer } from "./Reducers/deleteSpecificRowsFromDBReducer";
import { getAllRowsFromDBReducer } from "./Reducers/getAllRowsFromDBReducer";
import { getSpecificRowsFromDBReducer } from "./Reducers/getSpecificRowsFromDBReducer";
import { updateSpecificRowsFromDBReducer } from "./Reducers/updateSpecificRowsFromDBReducer";

/** l'état initial du state redux */
const initialState = {
  /**
   * tous les rows
   * de la DB Sqlite,
   * sont stockés ici.
   *
   * dans un array []
   * de length 0 ou +
   * (une fois les données initialisées)
   **/
  allRows: null,

  /**
   * Les sous groupes
   * de rows sont stockés ici.
   */
  groups: {},

  /**
   * les données sont elles
   *
   * en cours de chargement (true)
   * chargées (false)
   */
  loading: false,
};

/**
 * la tranche de machin truc bidule
 * qui permet a redux de fonctionner correctement.
 *
 * Ceci transforme plusieurs Reducers individuels en 1 méga réducer.
 */
export const TestPageStateSlice = createSlice({
  name: "TestPageState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // gère les ajoute de rows dans la DB
    addRowToDatabaseReducer(builder);

    // gère les mise à jour de row dans la DB
    updateSpecificRowsFromDBReducer(builder);

    // gère les suppression de row dans la DB
    deleteSpecificRowsFromDBReducer(builder);

    // obtient les row spécifiques dans la DB
    getSpecificRowsFromDBReducer(builder);

    // obtient tous les row dans la DB
    getAllRowsFromDBReducer(builder);
  },
});

export default TestPageStateSlice.reducer;
