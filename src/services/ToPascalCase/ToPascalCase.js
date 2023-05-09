import { clearAndUpper } from "../ClearAndUpper/ClearAndUpper.js";

/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
export function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}
