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
  return text.replace(/(^[\w]|[-_]\w)/g, clearAndUpper);
}

export function toCamelCase(str) {
  if (str?.length > 1) {
    const pascalized = toPascalCase(str);

    const firstChar = pascalized[0];
    const firstCharUpper = firstChar.toUpperCase();
    const suffix = pascalized.substring(1);

    return firstCharUpper + suffix;
  } else {
    return toPascalCase(str);
  }
}
