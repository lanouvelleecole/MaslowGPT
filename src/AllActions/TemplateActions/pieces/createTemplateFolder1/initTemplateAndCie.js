/*

// ADD_MASLOW_COMMAND_6

Ici, ajoute des actions PLOP créees par toi
(append, add, etc...)

Uncomment/Comment tout ceci si besoin.

ici est particulièrement nécessaire pour du boulot asynchrone (API, etc...)

*/
function initTemplateAndCie({ creationFolderFromAppRoot, promptData }) {
  const REQUETE_CHAT_GPT = {
    type: "REQUETE_CHAT_GPT",
  };

  const CREATION_FICHIER_FONCTION = {
    type: "CREATION_FICHIER_FONCTION",
  };

  const CREATION_HISTORIQUE = {
    type: "CREATION_HISTORIQUE",
  };

  const AJOUTE_CODE_UTILISANT_FONCTION = {
    type: "AJOUTE_CODE_UTILISANT_FONCTION",
  };

  const OUVRE_FICHIERS_CREES = {
    type: "OUVRE_FICHIERS_CREES",
  };

  const SUPPRESSION_DECHETS = {
    type: "SUPPRESSION_DECHETS",
  };

  // la boucle, ze beukeul, the loop
  return [
    // l'action asynchrone de récup de données chat gpt
    REQUETE_CHAT_GPT,

    // l'action de suppession de déchets
    SUPPRESSION_DECHETS,

    // l'action de création de fichier contenant la fonction crée
    CREATION_FICHIER_FONCTION,

    // l'action de création de fichier Maslow.json,
    // contenant les infos générées par chatgpt,
    // et les prompts humains ayant servi a créer ces données gpt
    CREATION_HISTORIQUE,

    // l'action qui ajoute dans un fichier .js souhaité,
    // une variable/constant contenant comme valeur,
    // un call de la fonction tout juste crée (optionnel)
    AJOUTE_CODE_UTILISANT_FONCTION,

    // l'action qui ouvre les fichiers concernés dans vs code
    OUVRE_FICHIERS_CREES,
  ];
}

export { initTemplateAndCie };
