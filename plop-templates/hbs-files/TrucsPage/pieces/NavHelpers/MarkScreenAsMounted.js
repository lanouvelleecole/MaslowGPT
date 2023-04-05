import { Constants } from "src/constants/Constants";
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * L'écran est mounted.
 */
export function MarkScreenAsMounted() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // l'écran est mounted
      isMounted: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {
      /*console.log(
        `state de page modifé avec succès dans Tutoriels. is mounted: ${row.isMounted}`
      );*/
    },
    onError: (e) => {},
  });
}
