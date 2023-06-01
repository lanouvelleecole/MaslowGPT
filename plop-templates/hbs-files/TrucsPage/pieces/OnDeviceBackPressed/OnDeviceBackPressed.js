/* PLOP_INJECT_IMPORT */
import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// permet callback onpress
import { OnHardwareBackPressed } from "src/services/OnHardwareBackPressed/OnHardwareBackPressed.js";

// bruit son onlic
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer.js";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { useRoute } from "@react-navigation/native";
import { GoToTutorielsList } from "../NavHelpers/GoToTutorielsList";
import { Constants } from "src/constants/Constants";

// gère appui sur bouton back du device.
export const OnDeviceBackPressed = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // exécute t'on la callback de back pressed ?
  const doWeRunCallback =
    TutorielsState.chosenOne != "TutorielsList" ||
    TutorielsState.snackbarVisible == Constants.true;

  // route de react navigation
  const route = useRoute();

  OnHardwareBackPressed({
    sound: () => SoundPlayer({ sound: PlayerGTAInstance.GetSound() }),
    stateValue: TutorielsState.chosenOne,
    condition: () => doWeRunCallback,
    action: () => {
      GoToTutorielsList();
    },
  });
};
