import { defaultValues } from "../DatabaseInfo";
import { AddRowToDatabase } from "./AddRowToDatabase";
import { GetTestPage } from "./GetTestPage";
import { UpdateSpecificRowsFromDB } from "./UpdateSpecificRowsFromDB";

/**
 * remet le state par défaut, si déja existant.
 *
 * ajoute le state par défaut, si pas de state existant
 */
export const ResetState = async () => {
  const rows = GetTestPage();

  // si le state camera n'existe pas déja....
  if (rows.length == 0) {
    // ajoute les option défaut
    await AddRowToDatabase({
      row: defaultValues,
    });
  }

  // sinon remet le state a 0
  else {
    await UpdateSpecificRowsFromDB({
      row: defaultValues,
      rowName: "uniqueId",
      rowValue: "TestPage",
      onSuccess: (data) => {
        //console.log(`state de TestPage reset avec succès`);
      },
    });
  }
};
