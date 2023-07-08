import { getNPMFolderRoot } from "../../../../../getNPMFolderRoot.js";
import { EditChatGPTArt } from "../../../../services/EditChatGPTArt/EditChatGPTArt.js";
import path from "path";
import { GetFolderForClientData } from "../../../../services/GetFolderForClientData/GetFolderForClientData.js";
import { DeleteClientFile } from "./DeleteClientFile.js";

export async function DoTheAPIWork(req) {
  const { model_chosen, prompt, params } = req.body;

  /*
  
  const paramsObj = params ? JSON.parse(params) : {};
  const apiKey = process.env.OPENAI_API_KEY;

  // Specify the destination subfolder where we store the files of this client
  const uploadPath = GetFolderForClientData(req);

  const photoFileInfo = req.file;

  const filePath = path.join(
    getNPMFolderRoot(),
    uploadPath,
    photoFileInfo.originalname
  );

  */

  return new Promise((resolve, reject) => {
    /*
    
    EditChatGPTArt({
      filePath,
      req,
      model_chosen,
      prompt,
      apiKey,
      params: paramsObj,
      onSuccess: (data) => {
        DeleteClientFile(filePath);

        resolve({ status: 202, data: data });
      },
      onError: (e) => {
        DeleteClientFile(filePath);

        reject({ status: 401, data: e });
      },
    });

    */

    resolve({ status: 202, data: "Requête réussie ! 🔥🌟🎇🎆✨🌠" });
  });
}
