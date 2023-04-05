/* PLOP_INJECT_IMPORT */

// permet du state local
import { React } from "react";

// des blocs de base
import { View } from "react-native";
import { Constants } from "src/constants/Constants.js";
import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter.js";
import { Spinner } from "src/components/Spinner/Spinner.js";

// styles de base
import { styles } from "./pieces/Styles/ThumbnailPicker.style.js";
import { OnComponentLifeAndDeath } from "./pieces/lifecycle/OnComponentLifeAndDeath";
import { ThumbnailPickerBody } from "./pieces/Body/ThumbnailPickerBody";
import { ThumbnailPickerBottomBar } from "./pieces/BottomBar/ThumbnailPickerBottomBar";

/**
 *
 * un component de prise de thumbnail.
 *
 */
const ThumbnailPicker = ({
  initialThumb,
  onThumbTaken,
  onOptionsClicked,
  clickSound,
}) => {
  /* PLOP_INJECT_CODE */

  // le state SqliteRedux du component
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetFreshestThumbnailPickerStateFirstRow();

  // gère le cycle de vie du component
  OnComponentLifeAndDeath(initialThumb);

  //console.log(`picker state: ${currentThumbnailPickerState.currentState}`);

  /* si le component n'est pas prêt à etre affiché, affiche spinner */
  if (currentThumbnailPickerState.isMounted == Constants.false) {
    return (
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    );
  } else {
    /** Si le biz est preêt, let's go */
    return (
      <View style={styles.dataListContainer}>
        {/* le steak */}
        <ThumbnailPickerBody
          onThumbTaken={onThumbTaken}
          onOptionsClicked={onOptionsClicked}
          clickSound={clickSound}
        />

        {/* le bottom bar (icones du bas) */}
        <ThumbnailPickerBottomBar clickSound={clickSound} />
      </View>
    );
  }
};

export { ThumbnailPicker };
