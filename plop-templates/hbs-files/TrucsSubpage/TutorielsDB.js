import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
// eslint-disable-next-line no-unused-vars
import { GoToTutorielsList } from "../NavHelpers/GoToTutorielsList";

/**
 *
 * permet de modifier un item stocké dans sqlite + redux
 *
 */
export const TutorielsDB = ({ answers, route }) => {
  /* PLOP_INJECT_ANSWER_VALUE */

  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  const currentItemUniqueId = TutorielsState.itemUniqueId;
  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);
  const editedItem = {
    ...currentItem,

    /* PLOP_INJECT_VALUE_IN_DB */

    //name,
    //category: category,
  };

  console.log(`edited item = ${JSON.stringify(editedItem)}`);

  SqliteReduxTutoriels.UpdateSpecificRowsFromDB({
    row: editedItem,
    rowName: "uniqueId",
    rowValue: editedItem.uniqueId,
    onSuccess: (row) => {
      console.log("item modifé avec succès dans Tutoriels.");

      GoToTutorielsList();
    },
    onError: (e) => {
      console.log(
        "Un problème est survenu durant la modif d'item dans Tutoriels."
      );

      GoToTutorielsList();
    },
  });
};
