/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

const RemoveDuplicatesFromArray = (arr) => {
  // Removes duplicate items in arr.
  const seen = new Set();
  const arrWithoutDupes = arr.filter((item) => {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });
  return arrWithoutDupes;
};

export { RemoveDuplicatesFromArray };
