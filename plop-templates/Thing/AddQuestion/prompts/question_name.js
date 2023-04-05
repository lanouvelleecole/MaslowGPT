/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_name)
 *
 */
const question_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_name",

  // Prompt to display on command line
  message: `
*************************************
Quel est le nom de cette question ?`,
};

export { question_name };
