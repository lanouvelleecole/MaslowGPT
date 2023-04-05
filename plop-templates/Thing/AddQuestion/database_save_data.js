export const database_save_data = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "database_save_data",

  // Prompt to display on command line
  message: `Si besoin, ...`,
};
