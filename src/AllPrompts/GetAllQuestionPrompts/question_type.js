import I18n from "i18n-js";

const userChoices = {
  // AJOUTE_TEMPLATE //

  textQuestion: I18n.t("xLZYMJCB"),
  numQuestion: I18n.t("xscsZacn"),
  choiceQuestion: I18n.t("xnzq5iR"),
  customQuestion: I18n.t("x7WH7DI9"),
};

const getQuestionType = (type) => {
  if (type == userChoices.textQuestion) {
    return "text";
  } else if (type == userChoices.numQuestion) {
    return "number";
  } else if (type == userChoices.choiceQuestion) {
    return "choices";
  } else if (type == userChoices.customQuestion) {
    return "custom";
  } else {
    throw Error(`Unknown question type: ${type}`);
  }
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
  message: I18n.t("xIw7ngfQ"),
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
export { getQuestionType };
