/* PLOP_INJECT_IMPORT */

// nécéssaire
import React from "react";

// styles de base
import { styles } from "./App.style.js";

// barre d'heure stylée
import { StatusBar } from "react-native";

// provider redux
import { Provider } from "react-redux";

// provider react native paper
import { Provider as PaperProvider } from "react-native-paper";

// permet nav entre écran
import { NavigationContainer } from "@react-navigation/native";

// store redux
import { store } from "src/reduxState/reduxStore";

// écran par défaut
import { Home } from "./AppInit";

// pour bon affichage IOS
import { SafeAreaProvider } from "react-native-safe-area-context";

// constantes utiles
import { Constants } from "src/constants/Constants.js";

// permet de pouvoir naviguer entre écrans
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * Ceci permet de pouvoir naviguer entre différents écrans
 * dans cette application.
 *
 * + d'infos dispo Ici
 *
 * https://reactnavigation.org/docs/getting-started
 */
const Stack = createNativeStackNavigator();

/**
 *
 * @param {*} onLayoutRootView, permet affichage de l'appli
 *
 * @param {*} appState, le state de base de l'application.
 *
 * @returns L'alpha et L'oméga, l'appli entière.
 */
export const AppMainComponent = ({ onLayoutRootView, appState }) => {
  /* PLOP_INJECT_CODE */

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
      {/* Permet de donner de la couleur et du style, à la barre ou il y a l'heure sur ton phone */}
      <StatusBar
        barStyle={"dark-content"}
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
      />

      {/* Le Provider Redux, qui permet accès CRUD à des données, et refresh UI */}
      <Provider store={store}>
        {/* Le Provider react-native-paper, qui permet accès à des pretty Appbar et autre joyeuseries */}
        <PaperProvider>
          {/* Permet une navigation entre écrans */}
          <NavigationContainer>
            {/* initialRouteName, c'est la page par défaut a l'allumage de l'appli */}
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerShown: false,
              }}
            >
              {/* PLOP_INJECT_PAGES_PARAMS */}

              {/* la page par défaut */}
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={appState.initialState}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
};
