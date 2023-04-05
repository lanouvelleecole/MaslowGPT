import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";
import { GetWorkWhere } from "src/services/DoWork/pieces/GetWorkWhere";

/**
 *
 * @param {*} workList
 * le boulot dans son intégralité,
 * avec stocké dedans les données
 * d'exécution des Work individuels
 *
 * Callback de boulot réussi
 */
export function OnWorkDone({ workList }) {
  const specificWork = GetWorkWhere({
    workList,
    where: (work) => {
      return work.uniqueId == "<Some_ID>" && work.workWith == "<SomeWorkName>";
    },
  });

  // eslint-disable-next-line no-unused-vars
  const specificWorkExists = specificWork != null;

  //console.log(`Work done successfully, workList: ${JSON.stringify(workList)}`);
  console.log(`Work done successfully !`);

  SqliteReduxWorkLists.DeleteSpecificRowsFromDB({
    rowName: "uniqueId",
    rowValue: workList.uniqueId,
    onSuccess: (data) => {
      console.log(`WorkList deleted successfully !`);
    },
  });
}
