/* PLOP_INJECT_IMPORT */
import { GetJSONObjectFromPath } from "../actions/GetJSONObjectFromPath.js";
import path from "path";
import { getPathWithForwardSlashes } from "../actions/getPathWithForwardSlashes.js";
import { AddEditableProps } from "../actions/AddEditableProps/AddEditableProps.js";

function GetMaslowJSONObj(appRootPath, folderPath) {
  // le path vers le fichier Maslow.json de cette fonction (si déja existant)
  const maslowJSONPath = getPathWithForwardSlashes(
    path.join(appRootPath, folderPath, "Maslow.json")
  );

  // le path vers le folder prompts de cette fonction (si déja existant)
  const promptsPath = getPathWithForwardSlashes(
    path.join(appRootPath, folderPath, "prompts")
  );

  // l'objet stocké dans <app_root>/func/folder/path/Maslow.json, si existant, ou null autrement.
  const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

  if (maslowJSONObject != null) {
    // l'objet stocké dans <app_root>/func/folder/path/Maslow.json,
    // agrémenté des valeurs fraîchement cueillies dans prompts/<editable_maslow_json_property>.txt
    const loadedObj = AddEditableProps(maslowJSONObject, promptsPath);
    return loadedObj;
  } else {
    return null;
  }
}
export { GetMaslowJSONObj };
