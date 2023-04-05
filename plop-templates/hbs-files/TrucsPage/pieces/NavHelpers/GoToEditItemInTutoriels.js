import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Let's go back to the item edit screen.
 */
export function GoToEditItemInTutoriels(itemUniqueId) {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // l'écran actuellement affiché dans Tutoriels.js
      chosenOne: "EditItemInTutoriels",

      // identifiant unique de l'item en cours de modif
      itemUniqueId: itemUniqueId,
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
