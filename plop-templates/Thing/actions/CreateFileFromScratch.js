import fs from "fs";
import path from "path";

function CreateFileFromScratch(filePath, fileContent) {
  try {
    // Create all the missing folders in the file path
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    // Write the file content to the file
    fs.writeFileSync(filePath, fileContent);

    return 42; // Creation/overwrite successful
  } catch (error) {
    console.error(error);
    return null; // Creation/overwrite failed
  }
}

export { CreateFileFromScratch };
