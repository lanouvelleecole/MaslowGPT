import { nanoid } from "nanoid";

function GetUniqueID(length) {
  return `x` + nanoid(length).replace(/[-_]/g, "");
}

export { GetUniqueID };
