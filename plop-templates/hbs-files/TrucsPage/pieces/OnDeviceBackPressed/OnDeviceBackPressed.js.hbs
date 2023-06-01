/* PLOP_INJECT_IMPORT */
import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// permet callback onpress
import { OnHardwareBackPressed } from "src/services/OnHardwareBackPressed/OnHardwareBackPressed.js";

// bruit son onlic
import { SoundPlayer } from "src/services/SoundPlayer/SoundPlayer.js";

// getter/setter
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";
import { useRoute } from "@react-navigation/native";
import { GoToTestPageList } from "../NavHelpers/GoToTestPageList";
import { Constants } from "src/constants/Constants";

// gère appui sur bouton back du device.
export const OnDeviceBackPressed = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const TestPageState = SqliteReduxTestPageState.GetTestPageStateFirstRow();

  // exécute t'on la callback de back pressed ?
  const doWeRunCallback =
    TestPageState.chosenOne != "TestPageList" ||
    TestPageState.snackbarVisible == Constants.true;

  // route de react navigation
  const route = useRoute();

  OnHardwareBackPressed({
    sound: () => SoundPlayer({ sound: PlayerGTAInstance.GetSound() }),
    stateValue: TestPageState.chosenOne,
    condition: () => doWeRunCallback,
    action: () => {
      GoToTestPageList();
    },
  });
};
