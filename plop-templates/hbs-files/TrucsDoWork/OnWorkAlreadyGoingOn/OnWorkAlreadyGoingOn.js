import { SqliteReduxWorkLists } from "src/reduxState/WorkLists/WorkListsGetterSetter";

/** si y'a déja du boulot going down */
export function OnWorkAlreadyGoingOn() {
  console.log(
    `Work already going on, for debugging purposes, let's delete this bitch`
  );

  SqliteReduxWorkLists.DeleteSpecificRowsFromDB({
    rowName: "uniqueId",
    rowValue: "Trucs",
    onSuccess: (data) => {
      console.log(`WorkList deleted successfully !`);
    },
  });
}
