import { addEnglishStrings } from "./addEnglishStrings.js";
import { addFrenchStrings } from "./addFrenchStrings.js";

function createPageInitAndCie({ subfolder, pageAndSubpageData }) {
  return [
    /**
     * de quoi utiliser
     * la page.
     * (import)
     */
    {
      type: "append",
      path: `${process.cwd()}/AppPieces/AppMainComponent.js`,

      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
\t{{pascalCase name}}
} from "${subfolder}/{{pascalCase name}}/{{pascalCase name}}";`,
      abortOnFail: true,
    },

    /**
     * ajoute dans App.js de quoi utiliser
     * la page.
     * (Stack.Screen)
     */
    {
      type: "append",
      path: `${process.cwd()}/AppPieces/AppMainComponent.js`,
      pattern: `{/* PLOP_INJECT_PAGES_PARAMS */}`,
      template: `\t\t\t\t\t\t\t<Stack.Screen 
\t\t\t\t\t\t\t\tname="{{pascalCase name}}" 
\t\t\t\t\t\t\t\tcomponent={ 
\t\t\t\t\t\t\t\t\t{{pascalCase name}}
\t\t\t\t\t\t\t\t} 
\t\t\t\t\t\t\t\tinitialParams={
\t\t\t\t\t\t\t\t\tappState.initialState
\t\t\t\t\t\t\t\t} />`,
    },

    // france
    addFrenchStrings(pageAndSubpageData),

    // engliche
    addEnglishStrings(pageAndSubpageData),
  ];
}

export { createPageInitAndCie };
