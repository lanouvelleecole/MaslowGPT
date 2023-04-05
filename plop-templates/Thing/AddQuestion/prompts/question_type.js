const userChoices = {
  // AJOUTE_TEMPLATE //
  textQuestion: "text",
  numQuestion: "number",
  choiceQuestion: "choices",
  customQuestion: "custom",
};

/**
 *
 * *) Quel genre de question veux tu créer ?
 *
 * Une question dont la réponse est du texte
 *
 * Une question dont la réponse est un nombre
 *
 * Une question dont la réponse est un choix
 *
 * Une question custom.
 *
 * (question_type)
 *
 */
const question_type = {
  type: "list",
  name: "question_type",
  message: `
*************************************
Quel genre de question veux tu créer ?`,
  choices: [
    // AJOUTE_TEMPLATE //
    userChoices.textQuestion,
    userChoices.numQuestion,
    userChoices.choiceQuestion,
    userChoices.customQuestion,
  ],
};

export { question_type };
export { userChoices };
