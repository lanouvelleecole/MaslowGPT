// permet de créer des AsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";

// permet accès CRUD sur DB Sqlite
import { AddRowToDatabase } from "src/services/LocalDatabase/AddRowToDatabase";

/**
 * Cet AsyncThunk ajoute un row
 * dans la base de données SQLITE.
 *
 * Une fois ajouté, on transmet ces données au Reducer correspondant.
 *
 * Ce Reducer va ajouter ce row dans initialState.allRows.
 *
 * Ce Reducer va aussi répartir ces rows dans un groupe, dans initialState.groups.
 * selon la valeur de row.groupName, si existant.
 */
export const addRowToDatabase = createAsyncThunk(
  "TestPageState/AddRowToDatabase",
  async (requestData, thunkAPI) => {
    // ajoute ce row dans la liste de tous les rows sqlite
    AddRowToDatabase(requestData);

    // transmet ce row
    // au Reducer correspondant,
    // qui le dispatchera et groupera, et consorts.
    return requestData.row;
  }
);
