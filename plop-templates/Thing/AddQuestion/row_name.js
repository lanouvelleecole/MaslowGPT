const row_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "row_name",

  // Prompt to display on command line
  message: `
*************************************
Si besoin, fournit le nom du row à ajouter/modifier, dans la DB.
`,
};

export { row_name };
