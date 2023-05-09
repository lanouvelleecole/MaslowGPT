/* PLOP_INJECT_IMPORT */
//import React from "react";

import { userChoices } from "../AllPrompts/GetGeneratePrompts/askWhatUserWants.js";

/**
 * Ici, on stocke les constantes utiles dans notre template de question
 */
const Constants = {
  ask_for_js_file_blacklist: () => [
    userChoices.createPage,
    userChoices.createService,
    userChoices.createStringRepo,
    userChoices.createWorkHTTP,
  ],
  exts: [".js", ".ts", ".jsx", ".tsx"],
  ignoreList: ["node_modules", ".git", ".svn", ".hg", ".idea"],
  only_first: "only-first",
  noChoice: "Je veux rien, capiche amigo ?",
  maxChoices: 50,
  pathAbsolu: "Path absolu",
  pathRelatif: "Path relatif",
  returnLine: "Avec ligne return",
  noReturnLine: "Sans ligne return",
  yes: "Oui",
  no: "Non",
  regeneration_command: `maslow regen-ai-func`,
};

export { Constants };
