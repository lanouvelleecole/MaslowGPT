import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Set le nom de l'écran actuellement visionné à l'écran.
 *
 * Pour camoufler les autres péquenauds.
 */
export function SetCurrentChosenOne(newChosenOne, itemUniqueId) {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // le nouvel élu
      chosenOne: newChosenOne,
      itemUniqueId,
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
