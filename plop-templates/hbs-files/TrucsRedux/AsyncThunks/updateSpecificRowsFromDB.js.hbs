// permet de créer des AsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";

// permet accès CRUD sur DB Sqlite
import { UpdateSpecificRowsFromDB } from "src/services/LocalDatabase/UpdateSpecificRowsFromDB";

/**
 * Cet AsyncThunk modifie/remplace
 * certains rows stockés dans la base de données SQLITE,
 * nommée TestPage.
 *
 * Une fois modifiés, on transmet ces données au Reducer correspondant.
 *
 * Ce Reducer va modifier la liste de rows dans initialState.allRows.
 *
 * Ce Reducer va aussi modifier les rows dans les groupes, dans initialState.groups.
 * selon la valeur de row.groupName, si existant.
 */
export const updateSpecificRowsFromDB = createAsyncThunk(
  "TestPage/UpdateSpecificRowsFromDB",
  async (requestData, thunkAPI) => {
    // met à jour le(s) row(s) dans la DB
    UpdateSpecificRowsFromDB(requestData);

    // transmet ce row,
    // et les infos rowName et rowValue,
    // au Reducer correspondant,
    // qui lui modifiera et consorts.
    return {
      row: requestData.row,
      rowName: requestData.rowName,
      rowValue: requestData.rowValue,
    };
  }
);
