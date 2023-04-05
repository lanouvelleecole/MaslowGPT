/* PLOP_INJECT_IMPORT */

// permet de chager des icones.

// permet d'update l'UI quand tout est chargé.
import { useEffect } from "react";

// permet de charger les sons
import { FetchEverythingNeededAsynchronously } from "./Fetchers/FetchEverythingNeededAsynchronously";

/**
 * @returns rien
 *
 * Ceci nous permet de pouvoir faire
 * des choses avant/après que le component soit contruit/détruit.
 *
 * dans notre cas, on charge des données utiles avant
 * d'afficher l'application.
 */
export const FetchEverythingNeeded = ({ appState, setAppState }) => {
  let initialState = null;

  useEffect(() => {
    async function prepare() {
      try {
        // charge tout ici
        initialState = await FetchEverythingNeededAsynchronously();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppState({
          ...appState,
          isEverythingLoaded: true,
          initialState: initialState,
        });
      }
    }

    prepare();
  }, []);
};
