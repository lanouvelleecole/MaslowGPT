import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";

/**
 * permet de retourner à l'écran de prise de thumb
 */
export const GoToPicker = () => {
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

  SqliteReduxThumbnailPickerState.UpdateSpecificRowsFromDB({
    row: {
      ...currentThumbnailPickerState,
      currentState: ThumbnailPickerState.PickThumb,
    },
    rowName: "uniqueId",
    rowValue: "ThumbnailPickerState",
  });
};
