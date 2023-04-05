import { GetTutorielsState } from "./GetTutorielsState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns l'item ayant le bon uniqueId, si existant, ou null.
 */
export const GetItemByUniqueID = (uniqueID) => {
  return GetTutorielsState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
