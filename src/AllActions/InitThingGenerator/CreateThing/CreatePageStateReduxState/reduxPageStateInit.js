/* eslint-disable no-useless-escape */
function reduxPageStateInit(subfolder, actualJsFile, name) {
  return [
    // ajoute le store redux
    {
      type: "add",
      force: true,
      path: `${process.cwd()}/${subfolder}/reduxStore.js`,
      templateFile: "plop-templates/hbs-files/reduxStore.js.hbs",
      skipIfExists: true,
    },
    // ajoute dans reduxStore.js
    // le reducer tout juste crée
    // (import)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/reduxStore.js`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import ${name}Reducer from './${name}/${name}Slice';`,
    },
    // ajoute dans reduxStore.js
    // le reducer tout juste crée
    // (reducer)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/reduxStore.js`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_REDUX_REDUCER */`,
      template: `\t\t${name}: ${name}Reducer,`,
    },

    // ajoute dans AppPieces/Fetchers/FetchReduxStates.js
    // de quoi initialiser le state redux crée
    // (initialisateur de state)
    // \t//await SqliteRedux${name}.ResetState();
    {
      type: "append",
      path: `${process.cwd()}/AppPieces/Fetchers/FetchReduxStates.js`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_REDUX_INIT */`,
      template: `
      
\tawait SqliteRedux${name}.Init${name}({
\t\tdebugMode: true,
\t});

\tawait SqliteRedux${name}.ResetState();

`,
    },
    // ajoute dans AppPieces/Fetchers/FetchReduxStates.js
    // de quoi utiliser le state redux crée
    // (import)
    {
      type: "append",
      path: `${process.cwd()}/AppPieces/Fetchers/FetchReduxStates.js`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  SqliteRedux${name}
} from "${subfolder}/${name}/${name}GetterSetter";`,
    },

    // ajoute dans le fichier .js souhaité,
    // de quoi utiliser le state redux crée
    // (imports)
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  SqliteRedux${name}
} from "${subfolder}/${name}/${name}GetterSetter";`,
      abortOnFail: false,
    },
    // ajoute dans le fichier .js destiné,
    // de quoi utiliser le state redux crée
    // (ligne de code)
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      // Pattern tells plop where in the file to inject the template
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\tconst {{name}} = SqliteRedux${name}.GetFreshest${name}();`,
      abortOnFail: false,
    },
  ];
}

export { reduxPageStateInit };
