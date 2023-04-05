function ProperlyIndentString(stringToIndent, qtySpaces) {
  const indentation = " ".repeat(qtySpaces);
  return stringToIndent.replace(/\n/g, `\n${indentation}`);
}
export { ProperlyIndentString };
