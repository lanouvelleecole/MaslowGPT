/* PLOP_INJECT_IMPORT */

import { Work } from "src/services/Work/Work";

/**
 *
 * @param {*} workList
 * l'ensemble de tous les boulots à effectuer
 *
 * @param {*} initialWorkData
 * données initiales fournies à OnCreateSaveWork
 *
 * Ajoute un Work au WorkList
 */
export const AddTrucsWork = async ({ workList, initialWorkData }) => {
  // si ......... , alors on ajoute le Work au WorkList
  // sinon, on n'ajoute rien
  const condition = true;

  if (condition) {
    // on ajoute le Work
    workList.works.push(
      Work({
        title: workList.title,
        description: `Trucs`,
        workWith: "Trucs",
        workData: {
          data: "value",
        },
      })
    );
  }
};
