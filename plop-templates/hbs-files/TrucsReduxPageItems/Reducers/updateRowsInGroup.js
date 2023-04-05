


/**
 *
 * @param {*} group, le groupe à modifier
 * @param {*} row, le row à modifier
 * @param {*} rowName, le nom de row déterminant si un row doit être modifié
 * @param {*} rowValue, le valeur de row déterminant si un row doit être modifié
 *
 * @return le groupe, sans pomme pourries
 */
export const updateRowsInGroup = ({ group, row, rowName, rowValue }) => {
  return group.map((elem) => {
    if (elem[rowName] === rowValue) {
      return row;
    } else {
      return elem;
    }
  });
};
