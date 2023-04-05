/* PLOP_INJECT_IMPORT */

import { TrucsSingletonInstance } from "./TrucsSingleton";

/**
 * Ceci permet de cancel ce Work (nommé Trucs)
 */
export const CancelTrucs = () => {
  const controller = TrucsSingletonInstance.GetCanceller("Trucs");

  controller?.abort();

  //console.log(`Annulation de Trucs effectuée avec succès !`);
};
