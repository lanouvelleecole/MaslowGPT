/* PLOP_INJECT_IMPORT */

// eslint-disable-next-line no-unused-vars
import { Work } from "src/services/Work/Work";
import { WorkList } from "src/services/WorkList/WorkList";

/**
 *
 * @param {*} initialWorkData
 *
 * @returns le WorkList contenant le boulot en entier
 */
export const OnCreateSaveWork = async ({ initialWorkData }) => {
  //console.log(`Unix time: ${GetUnixTime()}`);

  // tous les boulots
  const workList = WorkList({
    title: "Trucs",
  });

  /* PLOP_INJECT_CODE */

  // inverse la liste de works du WorkList
  // car ils sont ajoutés à l'envers via PLOP (append)
  workList.works.reverse();

  return workList;
};
