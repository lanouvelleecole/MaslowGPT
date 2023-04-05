const getData = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "promptData",

  // Prompt to display on command line
  message: `
Ici, fournit des données additionnelles si besoin.

Si c'est une sous page, Il faut fournir l'array suivant:

[
  "PageName",
  "String_Repo_Name",
  ["Appbar_Title_string_name", "fr", "eng"],
]

Si c'est une page que tu est en train de créer, il faut fournir l'array suivant:

[
  "String_Repo_Name",
  ["Appbar_Title_string_name", "fr", "eng"],
  ["Empty_DB_Msg_string_name", "fr", "eng"],
  ["Empty_DB_Btn_Msg_string_name", "fr", "eng"],
]
`,
};
export { getData };
