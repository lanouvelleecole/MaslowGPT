/* PLOP_INJECT_IMPORT */

// identifiant unique
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

// permet multilingue
import i18n from "i18n-js";

// constantes globales
import { Constants } from "src/constants/Constants";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// getter/setter
import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Le choix de catégorie d'item.
 */
const ChooseCategory = () => {
  /* PLOP_INJECT_CODE */
  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  const currentItemUniqueId = TutorielsState.itemUniqueId;

  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "ChooseCategory",

    type: "choices", //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return i18n.t("chooseCategory");
    },
    // requis, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return [
        {
          choiceDescription: i18n.t("besoinsDeBase"),
          choiceValue: Constants.besoinsDeBase,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsDeBase,
          onChoiceClicked: () => {
            console.log(
              `tutoriel name = ${answers["GetTutorielsItemName"].value}`
            );
          },
        },
        {
          choiceDescription: i18n.t("besoinsSpirituels"),
          choiceValue: Constants.besoinsSpirituels,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsSpirituels,
          onChoiceClicked: () => {},
        },
        {
          choiceDescription: i18n.t("besoinsTerritoriaux"),
          choiceValue: Constants.besoinsTerritoriaux,
          choiceImgUrl: "",
          choiceImgPath: "",
          greenCheckmark: answer?.value == Constants.besoinsTerritoriaux,
          onChoiceClicked: () => {},
        },
      ];
    },

    // la valeur choisie/écrite par l'user
    // null (par défaut)
    value: currentItem?.category ?? Constants.besoinsDeBase,

    // la valeur par défaut a mettre dans le text input
    //defaultValue: ({ answers, answer, answerIndex }) => "",

    // les flex du message ou de la zone d'input
    messageFlex: 1,
    componentFlex: 2,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component d'input en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que l'input est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return input != null;
    },
    // un message d'erreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return "Blue pill, Red pill ? Choose a pilule s'il te please.";
    },
  };
};

export { ChooseCategory };
