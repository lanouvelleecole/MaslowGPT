/* PLOP INJECT_IMPORT */
//import React from "react";

/* PLOP_INJECT_CODE */

/**
 * L'instance du singleton TrucsSingleton.
 */
let instance;

/**
 * le state actuel du TrucsSingleton.
 */
let state = {
  // les annuleurs de requêtes HTTP
  requestCancellers: {},
};

/**
 * Le all mighty TrucsSingleton, qui nous permet un accès CRUD du ghetto.
 */
class TrucsSingleton {
  /**
   * Le constructeur
   * qui ne construira qu'un seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error("New instance of TrucsSingleton cannot be created.");
    }

    instance = this;
  }

  /**
   * Ceci permet d'obtenir des données de cancel
   */
  GetCanceller(cancellerName) {
    return state.requestCancellers[cancellerName];
  }

  /**
   * Ceci permet de stocker des données de cancel
   * dans le TrucsSingleton
   */
  AddCanceller(cancellerName, cancellerValue) {
    state.requestCancellers[cancellerName] = cancellerValue;
  }
}

let TrucsSingletonInstance = Object.freeze(new TrucsSingleton());

export { TrucsSingletonInstance };
