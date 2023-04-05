import { EditItemInTutorielsDB } from "./EditItemInTutorielsDB";

/**
 *
 * @param {*} answers
 *
 * si succès, retour a la liste, et modifie le shizzle
 */
export function onItemCreationSuccess(answers) {
  EditItemInTutorielsDB({ answers });
}
