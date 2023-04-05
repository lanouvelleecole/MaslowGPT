// permet de créer des AsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";

// permet accès CRUD sur DB Sqlite
import { GetSpecificRowsFromDB } from "src/services/LocalDatabase/GetSpecificRowsFromDB";

/**
 * Cet AsyncThunk récupère tous les rows stockés dans la bas de données
 * nommée TestPage, ayant les bon rowName et rowValue.
 *
 * Une fois récupérées, on transmet ces données au Reducer correspondant.
 *
 * Ce Reducer va stocker toute la liste de rows dans initialState.allRows.
 *
 * Ce Reducer va aussi répartir ces rows en groupes, dans initialState.groups.
 * selon la valeur de row.groupName, si existant.
 */
export const getSpecificRowsFromDB = createAsyncThunk(
  "TestPage/GetSpecificRowsFromDB",
  async (requestData, thunkAPI) => {
    // la liste de tous les rows.
    const allRows = await GetSpecificRowsFromDB(requestData);

    // transmet cette liste de rows
    // au Reducer correspondant,
    // qui lui dispatchera et groupera, et consorts.
    return allRows;
  }
);
