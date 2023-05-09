
import fs from "fs";

  /**
   * 
   * args: 
   * 
   * return .....
   * 
   * This function .......
   */ 
export function deleteFileIfExisting(filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);

    //console.log(`Suppression de ${filePath} effectuée avec succès !!`);
  }
}
  