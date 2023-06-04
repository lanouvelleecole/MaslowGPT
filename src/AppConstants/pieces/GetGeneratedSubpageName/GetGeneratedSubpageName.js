import path from "path";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
function GetGeneratedSubpageName(page_name, subpage_name) {
  const startFilePath = path.join(
    process.cwd(),
    "src/pages",
    page_name,
    "pieces",
    subpage_name,
    `${subpage_name}.js`
  );

  return startFilePath;
}

export { GetGeneratedSubpageName };
