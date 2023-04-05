import { getNPMFolderRoot } from "../../../getNPMFolderRoot.js";
import { CreateFileFromScratch } from "./CreateFileFromScratch.js";
import path from "path";

function createNPMMaslowJSONFile(answers) {
  const mainMaslowJSONFile = path.join(
    getNPMFolderRoot(),
    "plop-templates/Maslow.json"
  );

  CreateFileFromScratch(mainMaslowJSONFile, JSON.stringify(answers, null, 2));
}
export { createNPMMaslowJSONFile };
