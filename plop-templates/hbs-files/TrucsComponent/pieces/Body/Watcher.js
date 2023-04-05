import { Image } from "@rneui/base";
import { React } from "react";
import { View } from "react-native";
import { Spinner } from "src/components/Spinner/Spinner.js";
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { styles } from "../Styles/ThumbnailPicker.style.js";

/**
 *
 * @returns l'écran de zieutage
 */
export function Watcher() {
  // le state du component
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetFreshestThumbnailPickerStateFirstRow();

  // FileExists({ debugPrint: true, path: currentThumbnailPickerState.thumbPath });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
      <Image
        source={{ uri: currentThumbnailPickerState.thumbPath }}
        containerStyle={styles.thumb}
      />
    </View>
  );
}
