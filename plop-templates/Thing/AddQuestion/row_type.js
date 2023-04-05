const row_type = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "row_type",

  // Prompt to display on command line
  message: `
*************************************
Si besoin, fournit le type de données stockée dans le row, si le row n'existe pas, et doit être crée.
(il y a 3 types possibles: "TEXT" (string), "INTEGER" (nombre entier), et "REAL" (nombre decimal))
`,
};

export { row_type };
