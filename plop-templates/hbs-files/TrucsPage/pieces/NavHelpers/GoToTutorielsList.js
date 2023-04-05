import { Constants } from "src/constants/Constants";
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Let's go back to TutorielsList
 */
export function GoToTutorielsList() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // l'écran actuellement affiché dans Tutoriels.js
      chosenOne: "TutorielsList",

      // cache le snack
      snackbarVisible: Constants.false,

      itemUniqueId: null,
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
