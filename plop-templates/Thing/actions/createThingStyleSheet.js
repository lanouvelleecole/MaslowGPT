import { getProperFolderName, userChoices } from "../prompts/askWhatUserWants";

function addThingStyleSheetIfNeeded(subfolder, whatThing, actions) {
  const properFolderName = getProperFolderName(whatThing);

  if (
    whatThing === userChoices.createComponent ||
    whatThing === userChoices.createPage
  ) {
    actions.push({
      type: "add",
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/{{pascalCase name}}.style.js`,
      templateFile: `plop-templates/hbs-files/${properFolderName}.style.js.hbs`,
    });
  }
}

/**
 *
 * @param {*} whatThing ce que l'user veut créer
 *
 * @param {*} actions la liste d'actions plop a effectuer
 * pour créer ce que veut l'user
 */
function addPageToNavigatorIfNeeded(actualJsFile, whatThing, actions) {
  // si l'user veut créer une page,
  // on doit ajouter cette page dans le NavigationContainer
  if (whatThing === userChoices.createPage) {
    actions.push({
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `{/* PLOP_INJECT_PAGES_PARAMS */}`,
      template: `\t\t\t\t\t\t\t<Stack.Screen 
\t\t\t\t\t\t\t\tname="{{pascalCase name}}" 
\t\t\t\t\t\t\t\tcomponent={
\t\t\t\t\t\t\t\t\t{{pascalCase name}}
\t\t\t\t\t\t\t\t} 
\t\t\t\t\t\t\t\tinitialParams={
\t\t\t\t\t\t\t\t\tappState.initialState
\t\t\t\t\t\t\t\t} />`,
    });
  }
}

/**
 *
 * @param {*} subfolder le dossier ou on crée la page
 *
 * @param {*} whatThing ce que l'user veut créer
 *
 * @param {*} actions la liste d'actions plop a effectuer
 * pour créer ce que veut l'user
 */
function addDataListStylesIfNeeded(subfolder, whatThing, actions) {
  // si l'user veut créer une page/compo,
  // on doit ajouter les styles/callbacks
  // pour appbar/body/bottombar
  if (
    whatThing === userChoices.createPage ||
    whatThing === userChoices.createComponent
  ) {
    // style/callback de l'appbar
    actions.push({
      type: "add",
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/DataListStyles/appbarStyle.js`,
      templateFile: `plop-templates/hbs-files/appbarStyle.js.hbs`,
    });

    // style/callback de body
    actions.push({
      type: "add",
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/DataListStyles/dataListStyle.js`,
      templateFile: `plop-templates/hbs-files/dataListStyle.js.hbs`,
    });

    // style/callback de bottom bar
    actions.push({
      type: "add",
      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/DataListStyles/bottomBarStyle.js`,
      templateFile: `plop-templates/hbs-files/bottomBarStyle.js.hbs`,
    });
  }
}

export { addThingStyleSheetIfNeeded };
export { addPageToNavigatorIfNeeded };
export { addDataListStylesIfNeeded };
