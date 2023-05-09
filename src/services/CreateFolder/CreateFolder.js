import fs from "fs";

function CreateFolder(folderPath) {
  try {
    // Check if the folder already exists
    if (fs.existsSync(folderPath)) {
      return 1;
    }
    // Create the folder
    fs.mkdirSync(folderPath);
    return 1;
  } catch (err) {
    // Handle any errors
    return 404;
  }
}

export { CreateFolder };
