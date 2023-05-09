function RemoveEmptyLines(sourceCode) {
  sourceCode = sourceCode.replace(/ {2,}\n/g, "");
  sourceCode = sourceCode.replace(/\n{3,}/g, "\n\n");

  return sourceCode;
}

export { RemoveEmptyLines };
