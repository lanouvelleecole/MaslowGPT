/* PLOP_INJECT_IMPORT */

/* PLOP_INJECT_GLOBAL_CODE */

const AddQuotesAroundWord = (str) => {
  // Split string into array of words
  let words = str.split(",");

  // Add apostrophes around each word
  words = words.map((word) => `"${word.trim()}"`);

  // Join the words and return result
  return words.join(", ");
};

export { AddQuotesAroundWord };
