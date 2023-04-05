import { GoToAddItemToTutoriels } from "../../pieces/NavHelpers/GoToAddItemToTutoriels";

/**
 *
 *
 * @returns la liste d'icones de la barre du bas d'écran.
 */
export function BottomBarIconsList() {
  return [
    {
      iconName: "plus-thick",

      // callback quand icone est cliquée
      onIconClicked: () => {
        GoToAddItemToTutoriels();
      },
    },
  ];
}
