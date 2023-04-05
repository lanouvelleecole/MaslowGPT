//
// Ci dessous se trouve le code nous
// permettant de générer divers templates via command-line,
// ce qui sera extrêment utile dans
// notre vie de developpeur.
//
// @param {*} plop l'instance plop

import { initAllGenerators } from "./plop-templates/initAllGenerators.js";

// nous permettant de faire notre magie
export default function (plop) {
  initAllGenerators(plop);
}
