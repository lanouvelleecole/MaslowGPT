


import { useSelector } from "react-redux";

/**
 *
 * permet d'obtenir le plus frais premier row stocké dans Redux.
 *
 * Meme après que le state redux a changé ailleurs.
 * Cela permet d'afficher dans l'UI la toute dernère valeur du state Redux.
 *
 * !!! IMPORTANT: Ce service n'est pas disponible en dehors du scope d'un component.
 * Si tu est en dehors de la zone d'influence d'un component,
 * il y aura un message d'erreur semblable à celui ci:
 *
 * Invalid hook call. Hooks can only be called inside of the body of a function component.
 *
 * Cela signifie qu'il faut utiliser l'autre fonction nommée
 *
 * GetTutorielsStateFirstRow
 *
 * qui fonctionne en dehors de la zone d'influence du component,
 * mais ne rafraichira pas l'UI quand le state redux change.
 *
 */

export function GetFreshestTutorielsStateFirstRow() {
  const allTutorielsState = useSelector((state) => state.TutorielsState.allRows);

  if (allTutorielsState != null && allTutorielsState.length > 0) {
    return allTutorielsState[0];
  } else {
    return allTutorielsState;
  }
}
