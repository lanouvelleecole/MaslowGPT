export function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

export function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}
