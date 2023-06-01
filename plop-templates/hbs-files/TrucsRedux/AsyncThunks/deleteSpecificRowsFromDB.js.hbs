// permet de créer des AsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";

// permet accès CRUD sur DB Sqlite
import { DeleteSpecificRowsFromDB } from "src/services/LocalDatabase/DeleteSpecificRowsFromDB";

/**
 * Cet AsyncThunk supprime des rows
 * stockés dans la base de données SQLITE,
 * selon rowName et rowValue
 *
 * Une fois supprimés, on transmet ces données au Reducer correspondant.
 * (rowName, rowValue)
 * qui va lui supprimer les données dans les groupes (via initialState.groups).
 * et aussi dans le gros panier .allRows
 */
export const deleteSpecificRowsFromDB = createAsyncThunk(
  "WorkListsState/DeleteSpecificRowsFromDB",
  async (requestData, thunkAPI) => {
    // combien de rows supprimés.
    const qtyAffected = await DeleteSpecificRowsFromDB(requestData);

    // transmet le nom et valeur du row déterminant les pommes pourries
    // au Reducer correspondant,
    // qui lui supprimera les cacas.
    return {
      rowName: requestData.rowName,
      rowValue: requestData.rowValue,
      qtyAffected: qtyAffected,
    };
  }
);
