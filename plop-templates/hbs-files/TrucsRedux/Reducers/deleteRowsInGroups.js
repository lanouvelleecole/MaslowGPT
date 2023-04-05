


import { deleteRowsInGroup } from "./deleteRowsInGroup";

/**
 *
 * @param {*} groups, les groupes de rows
 * @param {*} rowName, le nom du row déterminant si un row est une pomme pourrie
 * @param {*} rowValue, la valeur du row déterminant si un row est une pomme pourrie
 *
 * @return les groupes, sans pomme pourries
 */
export const deleteRowsInGroups = ({ groups, rowName, rowValue }) => {
  // pour chaque groupe...
  Object.entries(groups).map(([groupName, groupValue]) => {
    // supprime les pommes pourries du groupe
    groups[groupName] = deleteRowsInGroup({
      group: groupValue,
      rowName: rowName,
      rowValue: rowValue,
    });

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    groups[groupName].sort((a, b) => a.itemIndex - b.itemIndex);
  });

  return groups;
};
