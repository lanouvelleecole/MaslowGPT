function addEnglishStringsForSubpage(pageAndSubpageData) {
  const string_repo_name = pageAndSubpageData["get_string_repo"];

  const appbar_title_string_name = pageAndSubpageData["get_appbar_title_name"];
  const appbar_title_string_eng = pageAndSubpageData["get_appbar_title_eng"];

  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/${string_repo_name}/${string_repo_name}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_ENG_STRING */`,
    template: `
\t\t${appbar_title_string_name}: "${appbar_title_string_eng}",
`,
  };
}
export { addEnglishStringsForSubpage };
