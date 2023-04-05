import { nanoid } from "nanoid";

function GetUniqueID(length) {
  return nanoid(length).replace(/[-_]/g, "");
}

export { GetUniqueID };
