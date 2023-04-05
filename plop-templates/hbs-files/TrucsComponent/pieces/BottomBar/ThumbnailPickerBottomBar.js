import { BottomBar } from "src/components/BottomBar/Bottom";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import React from "react";
import { WatcherIcons } from "./bottomBarStyle";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";

/**
 * les icones du bas d'écran
 */
export const ThumbnailPickerBottomBar = ({ clickSound }) => {
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetFreshestThumbnailPickerStateFirstRow();

  const watcherIcons = WatcherIcons({ clickSound });

  if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.PickThumb
  ) {
    return;
  } else if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.WatchThumb
  ) {
    return <BottomBar bottomBarStyle={watcherIcons} />;
  } else if (
    currentThumbnailPickerState.currentState == ThumbnailPickerState.Wait
  ) {
    return;
  } else {
    return;
  }
};
