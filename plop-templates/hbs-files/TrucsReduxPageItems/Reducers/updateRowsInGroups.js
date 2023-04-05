


import { updateRowsInGroup } from "./updateRowsInGroup";

/**
 *
 * @param {*} groups, les groupes de rows
 * @param {*} row, le row à modifier
 * @param {*} rowName, le nom du row déterminant si un row est une pomme pourrie
 * @param {*} rowValue, la valeur du row déterminant si un row est une pomme pourrie
 *
 * @return les groupes, sans pomme pourries
 */

export const updateRowsInGroups = ({ groups, row, rowName, rowValue }) => {
  // pour chaque groupe...
  Object.entries(groups).map(([groupName, groupValue]) => {
    // met à jour les pommes pourries du groupe
    groups[groupName] = updateRowsInGroup({
      group: groupValue,
      row: row,
      rowName: rowName,
      rowValue: rowValue,
    });

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    groups[groupName].sort((a, b) => a.itemIndex - b.itemIndex);
  });

  return groups;
};
