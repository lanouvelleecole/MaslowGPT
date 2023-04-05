import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { GoToTutorielsList } from "../NavHelpers/GoToTutorielsList";
import { AddItemToDB } from "./AddItemToDB";

/**
 * @param {*} answers
 *
 * si données valides,
 * on retourne vers la liste de données.
 * et on ajoute les données dans la base de données.
 */
export function onItemCreationSuccess(answers) {
  GoToTutorielsList();

  const uniqueId = GetUniqueID();

  AddItemToDB(answers, uniqueId);
}
