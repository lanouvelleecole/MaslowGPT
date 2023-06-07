/* PLOP_INJECT_IMPORT */

// permet du state local
// eslint-disable-next-line no-unused-vars

import { GetFileContentsIfExisting } from "../GetFileContentsIfExisting/GetFileContentsIfExisting.js";

/**
 *
 * un service/component
 *
 */
const ReadJSONFile = (filePath) => {
  /* PLOP_INJECT_CODE */
  const fileContents = GetFileContentsIfExisting(filePath);

  if (fileContents) {
    return JSON.parse(fileContents.trim());
  }
};

export { ReadJSONFile };
