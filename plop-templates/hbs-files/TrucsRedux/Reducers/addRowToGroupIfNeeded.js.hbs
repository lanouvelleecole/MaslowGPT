


/**
 *
 * @param {*} row, le row à ajouter dans Redux
 * @param {*} state, permet de CRUD dans Redux
 */
export function addRowToGroupIfNeeded(row, state) {
  // le potentiel gang auquel appartient ce row
  const groupName = row.groupName;

  // si ce row à un groupName auquel il appartient.
  if (groupName != null) {
    // si il existe déja un groupe existant dans la liste de groupes
    if (Object.prototype.hasOwnProperty.call(state.groups, groupName)) {
      // push it
      state.groups[groupName].push(row);
    }

    // sinon crée un groupe
    // et ajoute le row
    else {
      state.groups[groupName] = [row];
    }

    // range en ordre croissant d'ajout
    // selon (row.itemIndex)
    state.groups[groupName].sort((a, b) => a.itemIndex - b.itemIndex);
  }
}
