const askForRepoName = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "repo_name",

  // Prompt to display on command line
  message:
    "Quel est le nom du repositoire dans lequel on va stocker ce string ? par défaut: ",

  default: "AppStrings",
};

const askForStringName = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "string_name",

  // Prompt to display on command line
  message: "Quel est le nom de ce string ?",
};

const askForStringFr = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "string_fr",

  // Prompt to display on command line
  message: "Ecris le texte en Français:",
};

const askForStringEng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "string_eng",

  // Prompt to display on command line
  message: "Ecris le texte en Anglais:",
};

const askForFile = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  // Variable name for this input
  name: "file",

  // Prompt to display on command line
  message:
    "Partant du dossier racine, dans quel fichier .js veux tu utiliser ce string ?",
};

export { askForStringName };
export { askForStringFr };
export { askForStringEng };
export { askForRepoName };
export { askForFile };
