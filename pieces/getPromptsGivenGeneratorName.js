import { getGeneratePrompts } from "../plop-templates/Thing/getGeneratePrompts.js";
import { getAddStringPrompts } from "../plop-templates/Thing/getAddStringPrompts.js";
import { getAddDefaultAppTemplatePrompts } from "../plop-templates/Thing/getAddDefaultAppTemplatePrompts.js";
import { getAllQuestionPrompts } from "../plop-templates/Thing/AddQuestion/getAllQuestionPrompts.js";
import { getNPMFolderRoot } from "../getNPMFolderRoot.js";

function getPromptsGivenGeneratorName() {
  // le path Command line ou la commande maslow xxx à été exécuté
  const appRootPath = process.cwd();

  // le xxx de la commande maslow xxx
  const generatorName = process.argv[2];

  /*
  console.log(`
npm root: ${getNPMFolderRoot()}
app root: ${appRootPath}
gen name: ${generatorName}
`);
  */

  /**
   * ce code ci dessous initialise le générateur
   * permettant de générer
   * un component, une page, un service,
   * ou un repo string
   */
  if (generatorName == "generate") {
    return getGeneratePrompts(appRootPath);
  } else if (generatorName == "add-string") {
    return getAddStringPrompts();
  } else if (generatorName == "add-default-app-template") {
    return getAddDefaultAppTemplatePrompts();
  } else if (generatorName == "question") {
    return getAllQuestionPrompts(appRootPath);
  } else if (generatorName == "regen-ai-func") {
    return [];
  } else if (generatorName == null) {
    /**
     * Tu as oublié le purpose, gourgandin
     */
    console.log(`
****************************************
* 
* Fournis une action après la commande 'maslow', 
* s'il te plaît, darling ! Comme ceci par ex:
*
* maslow generate
*
* maslow add-string
*
* maslow add-default-app-template
*
* maslow question
*
* maslow regen-ai-func <path/vers/dossier/fonction>
* 
****************************************`);

    return null;
  }
  // valeur extraterrestre
  else {
    console.log(`
****************************************
* 
* La commande maslow ${generatorName} n'existe pas, amigo !
*
* Fournis une action après la commande 'maslow', 
* s'il te plaît, darling ! Comme ceci par ex:
*
* maslow generate
*
* maslow add-string
*
* maslow add-default-app-template
*
* maslow question
*
* maslow regen-ai-func <path/vers/dossier/fonction>
*
****************************************`);

    return null;
  }
}
export { getPromptsGivenGeneratorName };
