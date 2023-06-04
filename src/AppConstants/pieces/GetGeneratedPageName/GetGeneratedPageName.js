import { AppMainComponentPath } from "../AppMainComponentPath/AppMainComponentPath.js";
import path from "path";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
function GetGeneratedPageName(page_name) {
  const startFilePath = path.join(
    process.cwd(),
    "src/pages",
    page_name,
    `${page_name}.js`
  );

  return startFilePath;
}

export { GetGeneratedPageName };
