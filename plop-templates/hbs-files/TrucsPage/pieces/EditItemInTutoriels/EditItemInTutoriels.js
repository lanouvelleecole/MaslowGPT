/* PLOP_INJECT_IMPORT */

/* permet UI de création/modif d'item dans liste */
import { GetUserInput } from "src/components/GetUserInput/GetUserInput";

/* la liste de question nécessaire à la modif d'item via UI */
import { TutorielsEditList } from "./TutorielsEditList/TutorielsEditList";

// some shyt
import { React } from "react";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// permet d'être multilingue

// permet accès CRUD a DB Sqlite , + Redux associé
import { cancelItemCreation } from "./cancelItemCreation";
import { onItemCreationSuccess } from "./onItemCreationSuccess";
import { onItemCreationError } from "./onItemCreationError";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { useRoute } from "@react-navigation/native";
import I18n from "i18n-js";

/**
 *
 *
 * @returns un component qui affiche conditionnellement
 * un GetUserInput de création d'item dans Tutoriels.
 */
export const EditItemInTutoriels = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  // la liste de questions
  const questions = TutorielsEditList();

  const route = useRoute();

  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"EditItemInTutoriels"}
      refreshed={true}
    >
      {/* Une UI de récup/modif de données */}
      <GetUserInput
        /* direction vers laquelle va le scroll */
        scrollDirection={"horizontal_one_by_one"}
        /* montre appbar, ou pas ? */
        showAppbar={true}
        /* le texte de titre de appbar */
        appbarTitle={I18n.t("Edit")}
        /* un bruit de clic */
        clickSound={route.params.audioPlayers.playerGTA}
        /* couleur darrière plan de appbar */
        appbarBackgroundColor={Constants.defaultBackgroundColor}
        /* taille de texte du titre appbar */
        appbarTextSize={20}
        /* couleur texte + icones appbar */
        appbarContentColor={Constants.defaultContentColor}
        /* font du texte du titre appbar */
        appbarFont={Constants.defaultFontFamily}
        /* liste de questions à transformer en UI  */
        questions={questions}
        /* couleur arrière plan body */
        bodyBackgroundColor={Constants.defaultBackgroundColor}
        /* couleur contenu body */
        bodyContentColor={Constants.defaultContentColor}
        /* font du texte du body */
        bodyFont={Constants.defaultFontFamily}
        /* couleur arrière plan bottom bar */
        bottomBarBackgroundColor={Constants.defaultBackgroundColor}
        /* couleur icones bottom bar */
        bottomBarIconsColor={Constants.defaultContentColor}
        /* callback si on annule création ditem */
        onCancel={() => {
          cancelItemCreation();
        }}
        /* callback si on réussit  à obtenir données valides, via questions UI */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers);
        }}
        /* callback si données input sont invalides */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};
