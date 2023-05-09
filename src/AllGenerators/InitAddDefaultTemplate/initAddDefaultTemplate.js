import { SupprimeCacaAndCreateDefaultApp } from "../../AllActions/InitAddDefaultTemplate/SupprimeCacaAndCreateDefaultApp.js";
import { getAddDefaultAppTemplatePrompts } from "../../AllPrompts/GetAddDefaultAppTemplatePrompts/getAddDefaultAppTemplatePrompts.js";

/**
 * Permet de créer un template de page avec données persistent (Sqlite et Redux)
 */

function initAddDefaultTemplate(plop, appRootPathFromC) {
  plop.setGenerator("add-default-app-template", {
    description:
      "Ajoute un template de base (App.js avec stylesheet séparé du component) pour notre application",

    /**
     * Dans l'array ci dessous,
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre template
     */
    prompts: getAddDefaultAppTemplatePrompts(),
    actions: function (data) {
      return SupprimeCacaAndCreateDefaultApp(data, appRootPathFromC);
    },
  });
}

export { initAddDefaultTemplate };
