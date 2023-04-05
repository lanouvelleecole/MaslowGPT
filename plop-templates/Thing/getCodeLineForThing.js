import { userChoices } from "./prompts/askWhatUserWants.js";

function getCodeLineForThing(subfolder, thingName, whatThing) {
  if (whatThing == userChoices.createComponent) {
    return `<${thingName}></${thingName}>`;
  }

  // AJOUTE_TEMPLATE //
  else if (whatThing == userChoices.createReduxState) {
    return (
      "Si c'est le premier usage de Redux," +
      "Ajoute ce component autour du component principal dans App.js:" +
      "\n\n" +
      `import { store } from '${subfolder}/reduxStore';` +
      "\n" +
      "import { Provider } from 'react-redux'" +
      "\n\n" +
      "<Provider store= {store}>" +
      "\n\n" +
      "</Provider>" +
      "\n\n"
    );
  } else if (whatThing == userChoices.createPage) {
    return `<${thingName}></${thingName}>`;
  } else if (whatThing == userChoices.createService) {
    return `${thingName}();`;
  } else if (whatThing == userChoices.createStringRepo) {
    return `${thingName}.initLocalization();`;
  } else {
    return "";
  }
}
const _getCodeLineForThing = getCodeLineForThing;
export { _getCodeLineForThing as getCodeLineForThing };
