


/**
 *
 * @param {*} rows, la liste de {key: value}
 *
 *
 * @returns un ensemble des groupes {
 *  groupName: [{key: value}, {...}]
 * }
 */
export const organizeRowsInGroups = ({ rows }) => {
  // les divers groupes de rows
  var groups = {};

  // pour chaque row dans la liste de rows,
  // regarde s'il faut le grouper, ou pas
  rows.forEach((row) => {
    // le nom du groupe auquel appartient ce row
    const groupNameOfRow = row.groupName;

    // si le nom de groupe existe,
    // ajoute le dans notre panier à groupes
    if (groupNameOfRow != null) {
      // si un groupe existe déja
      // push ce row dans la liste du groupe
      if (Object.prototype.hasOwnProperty.call(groups, groupNameOfRow)) {
        groups[groupNameOfRow].push(row);
      }

      // si y'a pas déja de groupe existant,
      // crées en un, puis ajoute le row dedans
      else {
        groups[groupNameOfRow] = [row];
      }

      // range en ordre croissant d'ajout
      // selon (row.itemIndex)
      groups[groupNameOfRow].sort((a, b) => a.itemIndex - b.itemIndex);
    }

    // sinon on n'ajoute pas
    // ce row a un groupe
    else {
      return;
    }
  });

  return groups;
};
