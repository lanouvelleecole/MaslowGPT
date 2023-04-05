/*  PLOP_INJECT_IMPORT */
import { React } from "react";

// styles/callbacks de appbar/body/bottom bar
import { getBottomBarStyle } from "../../DataListStyles/bottomBarStyle";
import { getAppbarStyle } from "../../DataListStyles/appbarStyle";
import { getDataListStyle } from "../../DataListStyles/dataListStyle";

// permet d'afficher une liste de données
import { DataList } from "src/components/DataList/DataList";

// globales constantes
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";

/**
 *
 * @returns la liste d'items crées par l'user, ou un message.
 */
export const TutorielsListOrMsg = () => {
  /* PLOP_INJECT_CODE */

  /** les styles/callbacks de l'appbar (si besoin) */
  const appbarStyle = getAppbarStyle();

  /** les styles/callbacks du dataList (si besoin) */
  const dataListStyle = getDataListStyle();

  /** les styles/callbacks du bottomBar (si besoin) */
  const bottomBarStyle = getBottomBarStyle();

  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  const TutorielsList = SqliteReduxTutoriels.GetFreshestTutoriels();

  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"TutorielsList"}
      refreshed={true}
    >
      {/* le component qui permet d'afficher tes items */}
      <DataList
        /* ici c est les Tutoriels sous forme de array [] */
        dataItems={TutorielsList}
        /* la couleur d arrière plan de la liste de données à l ecran */
        backgroundColor={Constants.defaultBackgroundColor}
        /* les styles/callbacks a appliquer à l appbar/body/bottom bar */
        appbarStyle={appbarStyle}
        dataListStyle={dataListStyle}
        bottomBarStyle={bottomBarStyle}
      ></DataList>
    </Camouflage>
  );
};