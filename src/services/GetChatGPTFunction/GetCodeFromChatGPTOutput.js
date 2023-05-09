function GetCodeFromChatGPTOutput(gptOutput) {
  const codeInfo = {
    gptOutput,
    mainCode: [],
    codeUsage: [],
    codeExtension: [],
    inspiringMessage: [],
    codeImport: [],
    codeExport: [],
    codeImportRelative: [],
    codeUsageReturn: [],
    codeInstall: [],
  };

  // Extract main code
  const mainCodeRegex = /\/\/ PLOP_CODE_START([\s\S]*?)\/\/ PLOP_CODE_END/g;
  let match;
  while ((match = mainCodeRegex.exec(gptOutput)) !== null) {
    codeInfo.mainCode.push(match[1].trim());
  }

  // Extract code usage
  const codeUsageRegex =
    /\/\/ PLOP_CODE_USE_START([\s\S]*?)\/\/ PLOP_CODE_USE_END/g;
  while ((match = codeUsageRegex.exec(gptOutput)) !== null) {
    codeInfo.codeUsage.push(match[1].trim());
  }

  // Extract code extension
  const codeExtensionRegex =
    /\/\/ PLOP_CODE_EXTENSION_START([\s\S]*?)\/\/ PLOP_CODE_EXTENSION_END/g;
  while ((match = codeExtensionRegex.exec(gptOutput)) !== null) {
    codeInfo.codeExtension.push(match[1].trim());
  }

  // Extract inspiring message
  const inspiringMessageRegex =
    /\/\/ PLOP_INSPIRING_MESSAGE_START([\s\S]*?)\/\/ PLOP_INSPIRING_MESSAGE_END/g;
  while ((match = inspiringMessageRegex.exec(gptOutput)) !== null) {
    codeInfo.inspiringMessage.push(match[1].trim());
  }

  // Extract code import
  const codeImportRegex =
    /\/\/ PLOP_CODE_IMPORT_START([\s\S]*?)\/\/ PLOP_CODE_IMPORT_END/g;
  while ((match = codeImportRegex.exec(gptOutput)) !== null) {
    codeInfo.codeImport.push(match[1].trim());
  }

  // Extract code export
  const codeExportRegex =
    /\/\/ PLOP_CODE_EXPORT_START([\s\S]*?)\/\/ PLOP_CODE_EXPORT_END/g;
  while ((match = codeExportRegex.exec(gptOutput)) !== null) {
    codeInfo.codeExport.push(match[1].trim());
  }

  // Extract relative import
  const codeImportRelativeRegex =
    /\/\/ PLOP_CODE_IMPORT_RELATIVE_START([\s\S]*?)\/\/ PLOP_CODE_IMPORT_RELATIVE_END/g;
  while ((match = codeImportRelativeRegex.exec(gptOutput)) !== null) {
    codeInfo.codeImportRelative.push(match[1].trim());
  }

  // Extract code usage with return
  const codeUsageReturnRegex =
    /\/\/ PLOP_CODE_USE_RETURN_START([\s\S]*?)\/\/ PLOP_CODE_USE_RETURN_END/g;
  while ((match = codeUsageReturnRegex.exec(gptOutput)) !== null) {
    codeInfo.codeUsageReturn.push(match[1].trim());
  }

  // Extract code installlation instructions
  const codeInstalLRegex =
    /\/\/ PLOP_COMMAND_LINE_INSTALL_START([\s\S]*?)\/\/ PLOP_COMMAND_LINE_INSTALL_END/g;
  while ((match = codeInstalLRegex.exec(gptOutput)) !== null) {
    codeInfo.codeInstall.push(match[1].trim());
  }

  return codeInfo;
}

export { GetCodeFromChatGPTOutput };
