import { useEffect } from "react";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { InitThumbnailPickerState } from "../GettersSetters/InitThumbnailPickerState";

/**
 * lifecycle
 */
export const OnComponentLifeAndDeath = (initialThumb) => {
  /* PLOP_INJECT_CODE */
  useEffect(() => {
    // Anything in here is fired on component mount.
    // initialise le state du component
    InitThumbnailPickerState(initialThumb);

    return () => {
      // Anything in here is fired on component unmount.
      // remet le state du component à zéro
      SqliteReduxThumbnailPickerState.ResetState();
    };
  }, []);
};
