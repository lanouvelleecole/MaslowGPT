/* PLOP_INJECT_IMPORT */

// permet d'accéder a des globales
import { useNavigation, useRoute } from "@react-navigation/native";
import I18n from "i18n-js";
import { Constants } from "src/constants/Constants.js";

// la liste d'options de l'appbar
import { AppbarOptionsMenuList } from "./AppbarStylePieces/AppbarOptionsMenuList";

/**
 * les styles de la topbar
 */
export const getAppbarStyle = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();
  const navigation = useNavigation();

  return {
    // la barre en haut de l'écran est elle distincte du body (false)
    // ou mélangé l'un a l'autre (true)
    appbarLayoutOverlaid: false,

    // le lecteur audio de clic
    clickSound: route.params.audioPlayers.playerGTA,

    // la taille des icones de l'appbar
    appbarIconSize: 35,

    // la taille du texte de l'appbar
    appbarTextSize: 20,

    // la hauteur de l'appbar
    appbarHeight: Constants.defaultBarHeight,

    // la hauteur/largeur des icones
    appbarIconWidth: 60,

    // idéalement la même taille que l'appbar
    appbarIconHeight: 75,

    // on affiche l'appbar ou pas ?
    showAppbar: true,

    // montre l'icone menu (3 ptit point) ?
    showAppbarMenuIcon: false,

    // le titre (texte snackbarVisible) de l'appbar
    appbarTitle: I18n.t("ZeMuthafuckinAppbarTitle"),

    // le design du texte de l'appbar et menu appbar
    appbarFont: Constants.defaultFontFamily,

    // montre l'icone a gauche de l'icone menu (3 ptit point) ?
    showAppbarIcon: false,

    // des icones venant de https://materialdesignicons.com/
    // l'icone en question si showAppbarIcon = true
    appbarIcon: "plus-thick",

    // la couleur d'arrière plan de l'appbar
    appbarBackgroundColor: Constants.defaultBackgroundColor,

    // si supérieur à 0, élève l'appbar pour avoir un effet de relief entre body et appbar
    appbarElevation: 0,

    // la couleur de tout ce qu'il y a dans l'appbar (titre, icones, etc...)
    appbarContentColor: Constants.defaultContentColor,

    // callback d'actions a effectuer si on clique sur le texte de l'appbar
    onAppbarTitleClicked: () => {},

    // callback d'actions a effectuer si on clique sur l'icone de l'appbar
    onAppbarIconClicked: () => {
      navigation.navigate("<SomeFancyScreen>");
    },

    // callback d'actions a effectuer si on clique sur la flèche de retour arrière
    // de l'appbar.
    onBackPressed: () => {
      navigation.goBack();
    },

    // la liste des choix du menu s'affichant quand on clique sur les 3 petits points de l'appbar
    appbarOptionMenuList: AppbarOptionsMenuList(),
  };
};
