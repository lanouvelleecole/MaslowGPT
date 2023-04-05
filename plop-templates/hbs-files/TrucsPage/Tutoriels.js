/* PLOP_INJECT_IMPORT */
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// permet du state local
import { React } from "react";

// des blocs de base
import { StatusBar } from "react-native";

// styles de base
import { styles } from "./Tutoriels.style.js";

// permet affichage correct sur l'écran
import { SafeAreaView } from "react-native-safe-area-context";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet lifecycle
import { OnComponentLifeAndDeath } from "./pieces/OnComponentLifeAndDeath/OnComponentLifeAndDeath";

// écran d'ajout d'item
import { AddItemToTutoriels } from "./pieces/AddItemToTutoriels/AddItemToTutoriels";

// écran de modif d'item
import { EditItemInTutoriels } from "./pieces/EditItemInTutoriels/EditItemInTutoriels";

// la liste d'item ou un message, si liste vide
import { TutorielsListOrMsg } from "./pieces/TutorielsListOrMsg/TutorielsListOrMsg";

// gère les appui sur bouton back du phone.
import { OnDeviceBackPressed } from "./pieces/OnDeviceBackPressed/OnDeviceBackPressed";

// permet message SnackBar
import { Messager } from "src/components/Messager/Messager";

// un tourneur
import { Spinner } from "src/components/Spinner/Spinner.js";
import { Wait } from "./pieces/Wait/Wait.js";
import { HideSnackbar } from "./pieces/NavHelpers/HideSnackbar.js";

/**
 *
 * 

 
// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// getter, contient le state actuel
const TutorielsState =
  SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

// setter de state de page, en entier
SetPageState({
  // le state existant.... agrémenté de ....
  ...TutorielsState,

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index d'erreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // l'écran actuellement affiché dans Tutoriels.js
  chosenOne: "TutorielsList",

  // la page Tutoriels.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique
  uniqueId: "TutorielsState",
}); OK

// setter, permet de nav vers écran de création de données.
GoToAddItemToTutoriels(); OK

// setter, permet de nav vers écran de liste de données.
GoToTutorielsList(); OK

// setter, permet de nav vers écran de navigation entre étapes.
GoToEditItemInTutoriels(); OK

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
const Tutoriels = ({ route, navigation }) => {
  /* PLOP_INJECT_CODE */

  // le state de la page
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  /*console.log(
    `ze page iz loading/reloading... Tutoriels state ?: ${JSON.stringify(
      TutorielsState
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
  if (TutorielsState.isMounted == Constants.false) {
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
      <TutorielsListOrMsg />

      {/* L'écran de création d'item */}
      <AddItemToTutoriels />

      {/* L'écran de modification d'item */}
      <EditItemInTutoriels />

      {/* L'écran de patientage */}
      <Wait />

      {/* permet d'afficher des messages à l'écran */}
      <Messager
        clickSound={route.params.audioPlayers.playerGTA}
        message={TutorielsState.snackbarText}
        onDismiss={() => {
          HideSnackbar();
        }}
        snackbarVisible={
          TutorielsState.snackbarVisible == Constants.true ? true : false
        }
      ></Messager>
    </SafeAreaView>
  );
};

export { Tutoriels };
