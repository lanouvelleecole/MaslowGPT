/* PLOP_INJECT_IMPORT */
import fs from "fs";
import path from "path";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 * AddEditableProps
 *
 * @params {Object} obj - An object in which the data will be added
 * @params {String} txtFilesPath - Path of the directory containing the txt files
 * @returns {Object} obj - Returns the object with the newly added properties or null if there was an error
 */
const AddEditableProps = (obj = {}, txtFilesPath = "") => {
  /* PLOP_INJECT_CODE */
  try {
    const files = fs.readdirSync(txtFilesPath);

    files.forEach((fileName) => {
      const extension = path.extname(fileName);

      if (extension === ".txt") {
        const propertyName = path.basename(fileName, extension);
        const fileData = fs.readFileSync(`${txtFilesPath}/${fileName}`, "utf8");

        obj[propertyName] = fileData;
      }
    });

    return obj;
  } catch (error) {
    // error handling.
    return null;
  }
};

export { AddEditableProps };
