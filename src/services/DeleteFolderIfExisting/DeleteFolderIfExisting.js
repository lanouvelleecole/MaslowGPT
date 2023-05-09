
import fs from "fs";

  /**
   * 
   * args: 
   * 
   * return .....
   * 
   * This function .......
   */ 
export function deleteFolderIfExisting(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });

    //console.log(`Suppression de ${folderPath} effectuée avec succès !!`);
  }
}
  