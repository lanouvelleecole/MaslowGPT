import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";

/** set le state du component, après prise de thumb */

export const SetThumbnailPickerState = (thumbPath) => {
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

  SqliteReduxThumbnailPickerState.UpdateSpecificRowsFromDB({
    row: {
      ...currentThumbnailPickerState,

      // si il existe déja un path de thumb,
      // alors on visionne ce thumb par défaut,
      // sinon on filme
      currentState: ThumbnailPickerState.WatchThumb,

      // le path du thumb
      thumbPath: thumbPath,
    },
    rowName: "uniqueId",
    rowValue: "ThumbnailPickerState",
    onSuccess: (d) => {},
    onError: (e) => {},
  });
};
