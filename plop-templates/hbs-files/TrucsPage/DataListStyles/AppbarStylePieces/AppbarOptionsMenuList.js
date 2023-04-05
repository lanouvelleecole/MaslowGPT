/**
 *
 *
 * @returns la liste d'options de l'appbar
 */
export function AppbarOptionsMenuList() {
  return [
    {
      optionName: "Option 1",

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {
        console.log("Option 1 à été cliqué");
      },
    },
    {
      // texte du choix
      optionName: "Option 2",

      // que faire quand on clique sur ce choix
      onOptionClicked: () => {
        console.log("Option 2 à été cliqué");
      },
    },
  ];
}
