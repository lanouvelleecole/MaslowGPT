/* PLOP INJECT_IMPORT */
//import React from "react";

/* PLOP_INJECT_CODE */

/**
 * L'instance du singleton Trucs.
 */
let instance;

/**
 * le state actuel du Trucs.
 */
let state = {
  //
  id: null,
};

/**
 * Le all mighty Trucs, qui nous permet un accès CRUD du ghetto.
 */
class Trucs {
  /**
   * Le constructeur
   * qui ne construira qu'un seul objet,
   * stocké dans instance.
   */
  constructor() {
    if (instance) {
      throw new Error("New instance of Trucs cannot be created.");
    }

    instance = this;
  }

  /**
   * Ceci permet d'obtenir le Trucs
   */
  GetID() {
    return state.id;
  }

  /**
   * Ceci permet de set des données dans le Trucs
   */
  SetID(newState) {
    state.id = newState;
  }

  /**
   * Ceci permet de ...
   */
  action_1({ arg1, arg2 }) {
    return;
  }

  /**
   * Ceci permet de ...
   */
  action_2({ arg1, arg2 }) {
    return;
  }
}

let TrucsInstance = Object.freeze(new Trucs());

export { TrucsInstance };
