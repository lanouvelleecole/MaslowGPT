function addImportClauseInAllThingsIndexingFile(subfolder) {
  return {
    type: "append",
    path: `${process.cwd()}/${subfolder}/index.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
  };
}

function addImportForJsFile(jsPath, thingFolder) {
  return {
    type: "append",
    path: `${process.cwd()}/${jsPath}`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import {
  {{pascalCase name}}
} from "${thingFolder}/{{pascalCase name}}";`,
  };
}

export { addImportClauseInAllThingsIndexingFile };

export { addImportForJsFile };
