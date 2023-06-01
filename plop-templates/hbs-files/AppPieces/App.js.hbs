/* PLOP_INJECT_IMPORT */

// nécéssaire
import React from 'react';

// the basics, la base de trucs pour toying around
import {LogBox} from 'react-native';
import {useState} from 'react';

// des providers, fournisseurs de choses utiles

// permet d'etre multilingue
import {AppStrings} from 'src/stringRepos/AppStrings/AppStrings';

// permet d'afficher un écran de base quand l'appli n'est pas encore prête a etre affichée
import * as SplashScreen from 'expo-splash-screen';

// permet un accès CRUD a des données,
// avec refresh de l'UI automatique quand data change. (via Redux),
// et persistence des données dans DB (via sqlite)

// permet de charger des données avant d'afficher l'application.
//
// données = fichiers audios, fonts, icones, etc...
import {FetchEverythingNeeded} from './AppPieces/FetchEverythingNeeded';

// Contient aussi une page dummy placeholder (Home).
import {hideSplashScreenWhenLoaded} from './AppPieces/AppInit';

// permet d'afficher l'appli en dessous de la barre ou il y a l'heure

// les constantes utiles
import {AppMainComponent} from './AppPieces/AppMainComponent';

// permet d'éviter un warning visuel,
// quand on passe une callback a une page via react-navigation.
// dans Stack.Screen initialParams.
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

/* PLOP_INJECT_GLOBAL_CODE */

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

/**
 * permet d'utiliser des strings multilingues partout
 * (doit etre exécute une seule fois dans le cycle de vie de l'appli)
 */
AppStrings();

/**
 * Bonjour,
 *
 * Cette appli à été créee par ..........
 *
 * Cette appli permet de ...........
 *
 * La fonction App retourne le Component qui contient notre appli toute entière.
 *
 * @returns le component alpha, the godfather of components.
 * La ou tout commence pour cette appli.
 *
 */
export default function App() {
  /* PLOP_INJECT_CODE */

  // contient le state nous disant si les chargements de choses sont ils prets.
  // contient le state initial a fournir aux écran Stack.Screen
  const [appState, setAppState] = useState({
    isEverythingLoaded: false,
    initialState: null,
  });

  // permet de faire des choses lors de la création/destruction du component.
  //
  // on va charger des données importantes
  // comme des fonts/icones etc...
  // avant d'afficher l'application.
  FetchEverythingNeeded({appState, setAppState});

  // une fois ces données chargées, on cache le 'splash screen'
  // et on obtient le onLayoutRootView nécessaire a fournir
  // au component englobant toute l'appli
  const onLayoutRootView = hideSplashScreenWhenLoaded(appState);

  // si tout n'est pas encore chargé, on affiche rien
  if (!appState.isEverythingLoaded) {
    return null;
  }
  // si tout est prêt, on affiche l'appli dans son entièreté.
  else {
    //console.log(`app initial state = ${appState.initialState}`);

    return (
      <AppMainComponent
        onLayoutRootView={onLayoutRootView}
        appState={appState}
      />
    );
  }
}
