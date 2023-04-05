/**
 *
 * @param {*} workResult
 * le résultat de l'exécution de ce Work
 *
 * @param {*} work
 * le Work tout juste exécuté
 *
 * @param {*} workIndex
 * la position de ce Work dans WorkList.works
 *
 * @returns le Work avec dedans stocké les données produite durant l'exécution de ce Work
 */
export const SaveTrucsWork = ({ workResult, work, workIndex }) => {
  /*console.log(
    `Trucs Request result is the following: ${JSON.stringify(workResult)}`
  );*/

  work.workData["output"] = workResult;

  return work;
};
