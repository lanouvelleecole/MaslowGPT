import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet d'obtenir le premier row stocké actuellement dans Redux.
 *
 * Mais l'UI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetTutorielsStateFirstRow() {
  const allTutorielsState = store.getState().TutorielsState.allRows;

  if (allTutorielsState != null && allTutorielsState.length > 0) {
    return allTutorielsState[0];
  } else {
    return allTutorielsState;
  }
}
