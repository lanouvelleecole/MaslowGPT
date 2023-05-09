import { GetJSONObjectFromPath } from '../GetJSONObjectFromPath/GetJSONObjectFromPath.js';
import path from "path";
import { getPathWithForwardSlashes } from '../GetPathWithForwardSlashes/getPathWithForwardSlashes.js';
import { GetFileContentsIfExisting } from '../GetFileContentsIfExisting/GetFileContentsIfExisting.js';

function getDataFromMaslowJSONObj(answers, property, appRootPath) {
  const subfolder = answers.ask_for_subfolder;

  // le nom de la fonction a créer/déja crée
  const functionName = answers.name;

  // le path vers le fichier Maslow.json de cette fonction (si déja existant)
  const maslowJSONPath = getPathWithForwardSlashes(
    path.join(appRootPath, subfolder, functionName, "Maslow.json")
  );

  // l'objet stocké dans maslow.json, si existant, ou null autrement.
  const maslowJSONObject = GetJSONObjectFromPath(maslowJSONPath);

  // le path vers le fichier prompts/<property>.txt de cette fonction (si déja existant)
  const txt_prompt_path = getPathWithForwardSlashes(
    path.join(appRootPath, subfolder, functionName, `prompts/${property}.txt`)
  );

  // le texte stocké dans <func_root>/prompts/<property>.txt, ou null si y'a rien
  let txt_prompt = GetFileContentsIfExisting(txt_prompt_path);

  /**
   * Par défaut:
   *
   * le texte dans <func_root>/prompts/<property>.txt,
   *
   * ou Maslow_Json["property"], dans <func_root>/Maslow.json,
   *
   */
  if (txt_prompt != null) {
    return txt_prompt;
  } else if (maslowJSONObject != null) {
    return maslowJSONObject[property];
  } else {
    return null;
  }
}
export { getDataFromMaslowJSONObj };
