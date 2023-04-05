import {
  addStringToRepoFr,
  addStringToRepoEng,
  addCode,
} from "./actions/addStringsToRepo.js";
import { getAddStringPrompts } from "./getAddStringPrompts.js";

function initAddIntlString(plop) {
  plop.setGenerator("add-string", {
    description: "Ajoute un string multilingue dans le repo",

    /**
     * Dans l'array ci dessous,
     * on demande à l'utilisateur
     * divers informations permettant la
     * création de notre template
     */
    prompts: getAddStringPrompts(),
    actions: function (data) {
      const string_name = data["string_name"];
      const string_fr = data["string_fr"];
      const string_eng = data["string_eng"];
      const file = data["file"];

      /*console.log(repo_name);
      console.log(string_name);
      console.log(string_eng);
      console.log(string_fr);*/

      console.log("import i18n from 'i18n-js';");
      console.log("");
      console.log(`{i18n.t('${string_name}')}`);

      return [
        addStringToRepoFr(string_name, string_fr),
        addStringToRepoEng(string_name, string_eng),
        //addImport(file),
        addCode(file, string_name),
      ];
    },
  });
}

export { initAddIntlString };
