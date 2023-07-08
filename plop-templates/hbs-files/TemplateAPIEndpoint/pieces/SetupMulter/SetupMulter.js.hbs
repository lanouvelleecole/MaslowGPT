import multer from "multer";
import fs from "fs";
import { GetFolderForClientData } from '../../../../services/GetFolderForClientData/GetFolderForClientData.js';

export function SetupMulter() {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = GetFolderForClientData(req); // Specify the destination subfolder

      fs.mkdirSync(uploadPath, { recursive: true }); // Create the subfolder if it doesn't exist
      cb(null, uploadPath); // Set the destination path
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original file name as the filename
    },
  });
  const upload = multer({ storage });
  return upload;
}
