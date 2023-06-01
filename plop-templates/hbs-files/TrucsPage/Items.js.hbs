/* PLOP_INJECT_IMPORT */
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

// permet du state local
import { React } from "react";

// des blocs de base
import { StatusBar } from "react-native";

// styles de base
import { styles } from "./TestPage.style.js";

// permet affichage correct sur l'écran
import { SafeAreaView } from "react-native-safe-area-context";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet lifecycle
import { OnComponentLifeAndDeath } from "./pieces/OnComponentLifeAndDeath/OnComponentLifeAndDeath";

// écran d'ajout d'item
import { AddItemToTestPage } from "./pieces/AddItemToTestPage/AddItemToTestPage";

// écran de modif d'item
import { EditItemInTestPage } from "./pieces/EditItemInTestPage/EditItemInTestPage";

// la liste d'item ou un message, si liste vide
import { TestPageListOrMsg } from "./pieces/TestPageListOrMsg/TestPageListOrMsg";

// gère les appui sur bouton back du phone.
import { OnDeviceBackPressed } from "./pieces/OnDeviceBackPressed/OnDeviceBackPressed";

// permet message SnackBar
import { Messager } from "src/components/Messager/Messager";

// un tourneur
import { Spinner } from "src/components/Spinner/Spinner.js";
import { Wait } from "./pieces/Wait/Wait.js";
import { HideSnackbar } from "./pieces/NavHelpers/HideSnackbar.js";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

/**
 *
 * 

 
// getter/setter
import { SqliteReduxTestPageState } from "src/reduxState/TestPageState/TestPageStateGetterSetter";

// getter, contient le state actuel
const TestPageState =
  SqliteReduxTestPageState.GetFreshestTestPageStateFirstRow();

// setter de state de page, en entier
SetPageState({
  // le state existant.... agrémenté de ....
  ...TestPageState,

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index d'erreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // l'écran actuellement affiché dans TestPage.js
  chosenOne: "TestPageList",

  // la page TestPage.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique
  uniqueId: "TestPageState",
}); OK

// setter, permet de nav vers écran de création de données.
GoToAddItemToTestPage(); OK

// setter, permet de nav vers écran de liste de données.
GoToTestPageList(); OK

// setter, permet de nav vers écran de navigation entre étapes.
GoToEditItemInTestPage(); OK

// setter, permet de nav vers écran de patiente
GoToWaitScreen();

// setter, permet de cacher le snackbar
HideSnackbar(); OK

// setter, permet de rendre l'écran visible
MarkScreenAsMounted(); OK

// setter, permet de choisir quel écran on veut visionner
SetCurrentChosenOne("newChosenOne", "itemUniqueId"); OK

// setter, permet de changer l'index d'item visionné
SetCurrentIndex(newIndex); OK


***********

 * 
 * 
 * @param {*} route
 * @param {*} navigation
 *
 * @returns l'écran de tutos
 */
const TestPage = ({ route, navigation }) => {
  /* PLOP_INJECT_CODE */

  // le state de la page
  const TestPageState =
    SqliteReduxTestPageState.GetFreshestTestPageStateFirstRow();

  /*console.log(
    `ze page iz loading/reloading... TestPage state ?: ${JSON.stringify(
      TestPageState
    )}`
  );*/

  /**
   * gère les appui sur bouton back
   * pour fermer menu options
   */
  OnDeviceBackPressed();

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit.
   *
   * A l'intérieur de ceci, on a ajouté un timeout qui
   * permet une meilleure navigation entre écran.
   */
  OnComponentLifeAndDeath();

  /* si la page n'est pas prête à etre affiché, affiche spinner */
  if (TestPageState.isMounted == Constants.false) {
    return (
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    );
  }

  /* si la page est prête à etre affiché, affiche la */
  return (
    /* le conteneur qui contient toute la page */
    <SafeAreaView style={styles.dataListContainer}>
      {/* Permet de donner de la couleur et du style, à la barre ou il y a l'heure sur ton phone */}
      <StatusBar
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
        barStyle={"dark-content"}
      />

      {/* PLOP_INJECT_SUBPAGE */}

      {/* la liste des items crées par l'user, ou un message invitant à créer un item. */}
      <TestPageListOrMsg />

      {/* L'écran de création d'item */}
      <AddItemToTestPage />

      {/* L'écran de modification d'item */}
      <EditItemInTestPage />

      {/* L'écran de patientage */}
      <Wait />

      {/* permet d'afficher des messages à l'écran */}
      <Messager
        clickSound={PlayerGTAInstance.GetSound()}
        message={TestPageState.snackbarText}
        onDismiss={() => {
          HideSnackbar();
        }}
        snackbarVisible={
          TestPageState.snackbarVisible == Constants.true ? true : false
        }
      ></Messager>
    </SafeAreaView>
  );
};

export { TestPage };
