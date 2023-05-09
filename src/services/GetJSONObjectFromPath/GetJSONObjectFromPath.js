import fs from "fs";

function GetJSONObjectFromPath(path) {
  try {
    const jsonString = fs.readFileSync(path);
    const jsonObject = JSON.parse(jsonString);
    return jsonObject;
  } catch (error) {
    return null;
  }
}

export { GetJSONObjectFromPath };
