import { GetJSONObjectFromPath } from '../GetJSONObjectFromPath/GetJSONObjectFromPath.js';
import path from "path";
import { getPathWithForwardSlashes } from '../GetPathWithForwardSlashes/getPathWithForwardSlashes.js';
import { getNPMFolderRoot } from '../../../getNPMFolderRoot.js';

function getDataFromNPMMaslowJSON(property) {
  try {
    // le path vers le fichier Maslow.json de cette fonction (si déja existant)
    const maslowJSONPath = getPathWithForwardSlashes(
      path.join(getNPMFolderRoot(), "plop-templates/Maslow.json")
    );

    // l'objet stocké dans maslow.json, si existant, ou null autrement.
    const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

    //console.log(`Maslow JSON path: ${maslowJSONPath}`);
    /*console.log(
      `Maslow JSON object: ${JSON.stringify(maslowJSONObject, null, 2)}`
    );*/
    //console.log(`Maslow JSON property name: ${property}`);

    // le dernier choix fait précédemment, ou null si non existant
    if (maslowJSONObject != null) {
      //console.log(`Maslow JSON property value: ${maslowJSONObject[property]}`);

      return maslowJSONObject[property];
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

function getNPMMaslowJSON() {
  try {
    // le path vers le fichier Maslow.json de cette fonction (si déja existant)
    const maslowJSONPath = getPathWithForwardSlashes(
      path.join(getNPMFolderRoot(), "plop-templates/Maslow.json")
    );

    // l'objet stocké dans maslow.json, si existant, ou null autrement.
    const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

    // le dernier choix fait précédemment, ou null si non existant
    if (maslowJSONObject != null) {
      return maslowJSONObject;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
}

export { getDataFromNPMMaslowJSON, getNPMMaslowJSON };
