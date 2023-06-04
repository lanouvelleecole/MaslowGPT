function addFrenchStringsForSubpage(pageAndSubpageData) {
  const string_repo_name = pageAndSubpageData["get_string_repo"];

  const appbar_title_string_name = pageAndSubpageData["get_appbar_title_name"];
  const appbar_title_string_src = pageAndSubpageData["get_appbar_title_src"];

  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/${string_repo_name}/${string_repo_name}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_SRC_STRING */`,
    template: `
\t\t${appbar_title_string_name}: "${appbar_title_string_src}",
`,
  };
}
export { addFrenchStringsForSubpage };
