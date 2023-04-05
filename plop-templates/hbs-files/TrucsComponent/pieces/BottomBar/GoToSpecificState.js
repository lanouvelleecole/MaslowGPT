import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter";

export function SetPickerState({ newState, onSuccess, onError }) {
  SqliteReduxThumbnailPickerState.UpdateSpecificRowsFromDB({
    row: {
      ...newState,
    },
    rowName: "uniqueId",
    rowValue: "ThumbnailPickerState",
    onSuccess: onSuccess,
    onError: onError,
  });
}
