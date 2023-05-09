function addFrenchStrings(pageAndSubpageData) {
  const string_repo_name = pageAndSubpageData["get_string_repo"];

  const appbar_title_string_name = pageAndSubpageData["get_appbar_title_name"];
  const appbar_title_string_fr = pageAndSubpageData["get_appbar_title_fr"];

  const empty_db_string_name = pageAndSubpageData["empty_db_msg_name"];
  const empty_db_string_fr = pageAndSubpageData["empty_db_msg_fr"];

  const empty_db_btn_string_name = pageAndSubpageData["empty_db_btn_msg_name"];
  const empty_db_btn_string_fr = pageAndSubpageData["empty_db_btn_msg_fr"];

  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/${string_repo_name}/${string_repo_name}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_FR_STRING */`,
    template: `
\t\t${appbar_title_string_name}: "${appbar_title_string_fr}",
\t\t${empty_db_string_name}: "${empty_db_string_fr}",
\t\t${empty_db_btn_string_name}: "${empty_db_btn_string_fr}",
`,
  };
}

export { addFrenchStrings };
