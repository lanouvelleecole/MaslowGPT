/* PLOP_INJECT_IMPORT */

// Getters et Setters
import { GetFreshestTutorielsState } from "./GettersSetters/GetFreshestTutorielsState";
import { GetTutorielsState } from "./GettersSetters/GetTutorielsState";
import { GetFreshestTutorielsStateFromGroup } from "./GettersSetters/GetFreshestTutorielsStateFromGroup";
import { GetTutorielsStateFromGroup } from "./GettersSetters/GetTutorielsStateFromGroup";
import { GetFreshestTutorielsStateFirstRow } from "./GettersSetters/GetFreshestTutorielsStateFirstRow";
import { GetTutorielsStateFirstRow } from "./GettersSetters/GetTutorielsStateFirstRow";
import { AddRowToDatabase } from "./GettersSetters/AddRowToDatabase";
import { DeleteSpecificRowsFromDB } from "./GettersSetters/DeleteSpecificRowsFromDB";
import { GetAllRowsFromDB } from "./GettersSetters/GetAllRowsFromDB";
import { InitTutorielsState } from "./GettersSetters/InitTutorielsState";
import { GetSpecificRowsFromDB } from "./GettersSetters/GetSpecificRowsFromDB";
import { UpdateSpecificRowsFromDB } from "./GettersSetters/UpdateSpecificRowsFromDB";
import { ResetState } from "./GettersSetters/ResetState";
import { GetItemByUniqueID } from "./GettersSetters/GetItemByUniqueID";
import { GetFreshestItemByUniqueID } from "./GettersSetters/GetFreshestItemByUniqueID";

/**
 * Ceci nous permet un accès CRUD à base données,
 *
 * et aussi du refresh UI
 *
 * (Via SQLITE et Redux)
 */
export const SqliteReduxTutorielsState = {
  // Getters.
  //
  // Récupèrent des données venant d'une base de données,
  // et ordonne les en ordre ascendant, selon row.itemIndex.
  //
  // (Mention spéciale pour GetAllRowsFromDB et GetSpecificRowsFromDB,
  // qui, en plus de récupérer des données venant de la DB, sont chargés aussi
  // de répartir les données (rows) dans redux)
  GetFreshestTutorielsState,
  GetTutorielsState,
  GetFreshestTutorielsStateFromGroup,
  GetTutorielsStateFromGroup,
  GetFreshestTutorielsStateFirstRow,
  GetTutorielsStateFirstRow,
  GetItemByUniqueID,
  GetFreshestItemByUniqueID,

  // ze spéciale ones
  GetAllRowsFromDB,
  GetSpecificRowsFromDB,

  // Setters.
  //
  // (Ajoute/Modifie/Supprime des données venant d'une base de données)
  AddRowToDatabase,
  DeleteSpecificRowsFromDB,
  InitTutorielsState,
  UpdateSpecificRowsFromDB,
  ResetState,
};
