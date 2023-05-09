const userChoices = {
  yesDelete: "Oui, supprime App.js et consorts.",
  noDontDelete: "Non, ne supprime rien.",
};

const deletionPrompt = {
  type: "list",
  name: "delete_or_not",
  message:
    "Cette opération va supprimer le fichier App.js (et consorts, inclus dossiers src/pages et src/reduxState) déja existant, Veux tu continuer ?",
  choices: [userChoices.yesDelete, userChoices.noDontDelete],
};

export { deletionPrompt };
export { userChoices };
