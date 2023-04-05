import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Set le state de page.
 */
export function SetPageState(newPageState) {
  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: newPageState,
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {
      /*console.log(
        `state de page modifé avec succès dans Tutoriels.`
      );*/
    },
    onError: (e) => {},
  });
}
