import { React } from "react";
import { Constants } from "src/constants/Constants.js";
import { RunIfPossible } from "src/services/RunIfPossible/RunIfPossible.js";
import { SetThumbnailPickerState } from "../GettersSetters/SetThumbnailPickerState";
import { PhotoPickerNative } from "src/components/PhotoPickerNative/VideoPickerNative";

/**
 *
 * @param {*} onThumbTaken
 *
 * @returns ze picker
 */
export function Picker({ onThumbTaken, onOptionsClicked, clickSound }) {
  /*const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetFreshestThumbnailPickerStateFirstRow();*/
  return (
    <PhotoPickerNative
      clickSound={clickSound}
      color={"white"}
      backgroundColor={"black"}
      fontFamily={Constants.defaultFontFamily}
      onPhotoTaken={(photoURI) => {
        console.log(
          `photo uri taken successfully ! path is: ${"file://" + photoURI}`
        );

        // stocke path de thumb dans state,
        // et zou vers écran de visionnage
        SetThumbnailPickerState("file://" + photoURI);

        // run la callback de thumb taken
        RunIfPossible({ func: onThumbTaken, args: "file://" + photoURI });
      }}
      onPhotoError={(errorMsg) => {}}
      onOptionsClicked={() => {
        RunIfPossible({ func: onOptionsClicked });
      }}
    />
  );
}
