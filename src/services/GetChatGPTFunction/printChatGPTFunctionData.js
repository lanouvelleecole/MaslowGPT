function printChatGPTFunctionData({
  gold_caviar,
  printDebug,
  functionName,
  functionFilePathFromAppRoot,
  usePathOrRoot,
}) {
  const functionCode = gold_caviar.mainCode[0];
  const functionUsageCode = gold_caviar.codeUsage[0];
  const functionFileExtension = gold_caviar.codeExtension[0];
  const functionCodeImport = gold_caviar.codeImport[0];
  const functionCodeExport = gold_caviar.codeExport[0];
  const inspiringMessage = gold_caviar.inspiringMessage[0];
  const functionCodeImportRelative = gold_caviar.codeImportRelative[0];
  const functionUsageCodeReturn = gold_caviar.codeUsageReturn[0];
  const functionInstall = gold_caviar.codeInstall[0];

  if (printDebug) {
    console.log(
      `\n\nHere's the code of the function ${functionName}, generated from Chat GPT:\n\n${functionCode}`
    );

    console.log(
      `\n\nHere's the code use example of the function ${functionName} (without a return line) generated from Chat GPT:\n\n${functionUsageCode}`
    );

    console.log(
      `\n\nHere's the code use example of the function ${functionName} (with a return line) generated from Chat GPT:\n\n${functionUsageCodeReturn}`
    );

    console.log(
      `\n\nHere's the file extension of this function, generated from Chat GPT:\n\n${functionFileExtension}`
    );

    console.log(
      `\n\nHere's the absolute import line of this function, generated from Chat GPT:\n\n${functionCodeImport}`
    );

    console.log(
      `\n\nHere's the relative import line of this function (${functionFilePathFromAppRoot}.${functionFileExtension} is relative to ${usePathOrRoot}) generated from Chat GPT:\n\n${functionCodeImportRelative}`
    );

    console.log(
      `\n\nHere's the export line of this function, generated from Chat GPT:\n\n${functionCodeExport}`
    );

    console.log(
      `\n\nHere's the installation instructions, if needed:\n\n${functionInstall}`
    );

    console.log(
      `\n\nHere's an inspiring quote, stay strong, soldier, take care of yourself:\n\n${inspiringMessage}`
    );
  }
}
export { printChatGPTFunctionData };
