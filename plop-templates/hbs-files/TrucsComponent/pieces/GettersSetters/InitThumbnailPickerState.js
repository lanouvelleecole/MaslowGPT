import { Constants } from "src/constants/Constants.js";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";

/** Initialise le state du component */
export const InitThumbnailPickerState = (initialThumb) => {
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

  SqliteReduxThumbnailPickerState.UpdateSpecificRowsFromDB({
    row: {
      ...currentThumbnailPickerState,

      // si il existe déja un path de thumb,
      // alors on visionne ce thumb par défaut,
      // sinon on filme
      currentState:
        initialThumb != null
          ? ThumbnailPickerState.WatchThumb
          : ThumbnailPickerState.PickThumb,

      // le path du thumb
      thumbPath: initialThumb,

      // on affiche ze bezness
      isMounted: Constants.true,
    },
    rowName: "uniqueId",
    rowValue: "ThumbnailPickerState",
  });
};
