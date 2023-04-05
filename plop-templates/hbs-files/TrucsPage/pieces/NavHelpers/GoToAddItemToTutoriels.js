import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Let's go back to AddItemToTutoriels
 */
export function GoToAddItemToTutoriels() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // l'écran actuellement affiché dans Tutoriels.js
      chosenOne: "AddItemToTutoriels",
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
