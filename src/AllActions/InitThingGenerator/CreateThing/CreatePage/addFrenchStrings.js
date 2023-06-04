function addFrenchStrings(pageAndSubpageData) {
  const string_repo_name = pageAndSubpageData["get_string_repo"];

  const appbar_title_string_name = pageAndSubpageData["get_appbar_title_name"];
  const appbar_title_string_src = pageAndSubpageData["get_appbar_title_src"];

  const empty_db_string_name = pageAndSubpageData["empty_db_msg_name"];
  const empty_db_string_src = pageAndSubpageData["empty_db_msg_src"];

  const empty_db_btn_string_name = pageAndSubpageData["empty_db_btn_msg_name"];
  const empty_db_btn_string_src = pageAndSubpageData["empty_db_btn_msg_src"];

  return {
    type: "append",
    path: `${process.cwd()}/src/stringRepos/${string_repo_name}/${string_repo_name}.js`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_SRC_STRING */`,
    template: `
\t\t${appbar_title_string_name}: "${appbar_title_string_src}",
\t\t${empty_db_string_name}: "${empty_db_string_src}",
\t\t${empty_db_btn_string_name}: "${empty_db_btn_string_src}",
`,
  };
}

export { addFrenchStrings };
