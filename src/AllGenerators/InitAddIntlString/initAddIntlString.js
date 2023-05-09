/* PLOP_IMPORT_ReplaceCopiedTextInFile */
/* PLOP_IMPORT_ReplaceCopiedTextInFile */

import { getAddStringPrompts } from '../../AllPrompts/GetAddStringPrompts/getAddStringPrompts.js';
import { AddIntlString } from '../../AllActions/InitAddIntlString/AddIntlString.js';

function initAddIntlString(plop, appRootPath) {
  plop.setGenerator("add-string", {
    description: "Ajoute un string multilingue dans le repo",

    /**
     * Dans l'array ci dessous,
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre template
     */
    prompts: getAddStringPrompts(appRootPath),
    actions: function (data) {
      return AddIntlString(data, appRootPath);
    },
  });
}

export { initAddIntlString };
