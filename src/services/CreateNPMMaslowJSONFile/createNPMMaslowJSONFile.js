import { CreateFileFromScratch } from '../CreateFileFromScratch/CreateFileFromScratch.js';
import path from "path";
import { getNPMFolderRoot } from '../../../getNPMFolderRoot.js';

function createNPMMaslowJSONFile(answers) {
  const mainMaslowJSONFile = path.join(
    getNPMFolderRoot(),
    "plop-templates/Maslow.json"
  );

  CreateFileFromScratch(mainMaslowJSONFile, JSON.stringify(answers, null, 2));
}
export { createNPMMaslowJSONFile };
