function addStringToRepoFr(string_name, string_fr) {
  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/{{pascalCase repo_name}}/{{pascalCase repo_name}}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_FR_STRING */`,
    template: `\t\t${string_name}: "${string_fr}",`,
  };
}

function addStringToRepoEng(string_name, string_eng) {
  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/{{pascalCase repo_name}}/{{pascalCase repo_name}}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_ENG_STRING */`,
    template: `\t\t${string_name}: "${string_eng}",`,
  };
}

function addImport(jsFile) {
  return {
    type: "append",
    path: `${process.cwd()}/${jsFile}`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import i18n from 'i18n-js';`,
  };
}

function addCode(jsFile, string_name) {
  return {
    type: "append",
    path: `${process.cwd()}/${jsFile}`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_CODE */`,
    template: `\tconst ${string_name} = i18n.t('${string_name}');`,
  };
}

export { addStringToRepoFr };
export { addStringToRepoEng };
export { addImport };
export { addCode };
