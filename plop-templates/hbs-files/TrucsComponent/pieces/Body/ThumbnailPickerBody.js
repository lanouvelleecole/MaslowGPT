import { React } from "react";
import { Spinner } from "src/components/Spinner/Spinner";
import { Constants } from "src/constants/Constants";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";
import { Picker } from "./Picker";
import { Watcher } from "./Watcher";

/**
 * le body du component
 */
export const ThumbnailPickerBody = ({
  onThumbTaken,
  onOptionsClicked,
  clickSound,
}) => {
  // le state du component
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetFreshestThumbnailPickerStateFirstRow();

  // si on veut prendre un thumb
  if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.PickThumb
  ) {
    return (
      <Picker
        clickSound={clickSound}
        onThumbTaken={onThumbTaken}
        onOptionsClicked={onOptionsClicked}
      />
    );
  }

  // si on veut visionner un thumb
  else if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.WatchThumb
  ) {
    return <Watcher />;
  }
  // si on veut patienter
  else if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.Wait
  ) {
    return (
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    );
  } else {
    return;
  }
};
