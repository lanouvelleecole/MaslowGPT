import { _getActionsForThingToBeCreated } from "./getActionsForThingToBeCreated.js";

const getActionsForThingToBeCreated = (data, appRootPath, plop) => {
  try {
    return _getActionsForThingToBeCreated(data, appRootPath, plop);
  } catch (e) {
    console.error(
      `An error occured trying to obtain the list of actions: ${JSON.stringify(
        e
      )}\n\nHere's the stack\n\n${e.stack}`
    );

    return [];
  }
};
export { getActionsForThingToBeCreated };
