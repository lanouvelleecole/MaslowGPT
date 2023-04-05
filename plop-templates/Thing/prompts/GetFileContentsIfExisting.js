import fs from "fs";

function GetFileContentsIfExisting(path) {
  try {
    const contents = fs.readFileSync(path, "utf8");
    return contents;
  } catch (error) {
    return null;
  }
}

export { GetFileContentsIfExisting };
