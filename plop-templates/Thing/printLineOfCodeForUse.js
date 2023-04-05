import { toPascalCase } from "./actions/createThing.js";
import { getCodeLineForThing } from "./getCodeLineForThing.js";

function printLineOfCodeForUse(subfolder, thingName, what_we_wanna_do) {
  const codeCallingLine = getCodeLineForThing(
    subfolder,
    toPascalCase(thingName),
    what_we_wanna_do
  );

  console.log("Ci dessous du code à copier-coller:");
  console.log(`${codeCallingLine}`);
}
export { printLineOfCodeForUse };
