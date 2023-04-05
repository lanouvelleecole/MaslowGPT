/* PLOP_INJECT_IMPORT */

import { TrucsSingletonInstance } from "./TrucsSingleton";

/**
 *
 * @param {*} cancelData
 * les données d'annulation
 *
 * Permet de stocker des données d'annulation de Work
 */
export const GrabTrucsCanceller = (cancelData) => {
  /*console.log(
    `Let's grab the cancel data for Trucs`
  );*/

  TrucsSingletonInstance.AddCanceller({
    cancellerName: "Trucs",
    cancellerValue: cancelData,
  });
};
