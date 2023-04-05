import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Set l'index d'étape actuellement visionné à l'écran.
 */
export function SetCurrentIndex(newIndex) {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      currentIndex: newIndex,
    },
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
