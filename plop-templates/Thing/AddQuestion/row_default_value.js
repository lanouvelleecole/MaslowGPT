const row_default_value = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "row_default_value",

  // Prompt to display on command line
  message: `
*************************************
Si besoin, fournit la valeur par défaut à donner au row (si c'est un State de page/component)
`,
};

export { row_default_value };
