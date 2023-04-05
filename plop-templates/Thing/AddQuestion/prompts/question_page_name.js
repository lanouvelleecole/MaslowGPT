/**
 *
 * *) Quel est le nom de cette question ?
 *
 * (question_page_name)
 *
 */
const question_page_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "question_page_name",

  // Prompt to display on command line
  message: `
*************************************
Si l'affichage de cette question nécessite des données de page (SqliteRedux<PageName>) , donne le nom de la page.`,
};

export { question_page_name };
