
/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

// Import Lodash Library
import _ from "lodash";

/**
 * Sorts arr, by string length, in ascending order
 *
 * @param {string[]} arr - The array of strings to be sorted
 */
const SortArrayByLength = (arr) => {
  return _.sortBy(arr, (str) => str.length);
};

export { SortArrayByLength };
    