function ProperlyIndentString(stringToIndent, qtySpaces) {
  const indentation = " ".repeat(qtySpaces);
  return stringToIndent.replace(/\n/g, `\n${indentation}`);
}

function ProperlyIndentFirstLine(stringToIndent, qtySpaces) {
  const indentation = " ".repeat(qtySpaces);
  return stringToIndent.replace(/\n/, `\n${indentation}`);
}

export { ProperlyIndentString, ProperlyIndentFirstLine };
