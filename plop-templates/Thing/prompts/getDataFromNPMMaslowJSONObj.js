import { GetJSONObjectFromPath } from "../actions/GetJSONObjectFromPath.js";
import path from "path";
import { getPathWithForwardSlashes } from "../actions/getPathWithForwardSlashes.js";
import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";

function getDataFromNPMMaslowJSON(answers, property) {
  // le path vers le fichier Maslow.json de cette fonction (si déja existant)
  const maslowJSONPath = getPathWithForwardSlashes(
    path.join(getNPMFolderRoot(), "plop-templates/Maslow.json")
  );

  // l'objet stocké dans maslow.json, si existant, ou null autrement.
  const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

  /*console.log(`Maslow JSON path: ${maslowJSONPath}`);
  console.log(
    `Maslow JSON object: ${JSON.stringify(maslowJSONObject, null, 2)}`
  );
  console.log(`Maslow JSON property name: ${property}`);
  console.log(`Maslow JSON property value: ${maslowJSONObject[property]}`);*/

  // le dernier choix fait précédemment, ou null si non existant
  if (maslowJSONObject != null) {
    return maslowJSONObject[property];
  } else {
    return null;
  }
}
export { getDataFromNPMMaslowJSON };
