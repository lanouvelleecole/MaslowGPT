// Inside the body of ${functionName}, add a comment containing 'PLOP_INJECT_CODE_USE_PATTERN'.

function getChatGPTFunctionPrompt({
  functionName,
  functionLanguage,
  functionPurpose,
  functionArgs,
  functionReturnValue,
  functionFilePathFromAppRoot,
  relativePath,
}) {
  return `
Generate a function called ${functionName} . 

This function is written in ${functionLanguage} . 

Here's the inputs: ${functionArgs} . 

Here's a brief summary of ${functionName}: ${functionPurpose} . 

Here's a detailed description of ${functionName}: ${functionReturnValue} . 

Add useful comments comments . 

Generate the import lines for the libraries used.  

Surround ${functionName}, AND the library import lines, with those 2 string patterns: '// PLOP_CODE_START' and '// PLOP_CODE_END' . 

On the line after the '// PLOP_CODE_END' line, Add a code use example. Store the code example in a constant called ${functionName}Value. Surround the code use example with those 2 string patterns: '// PLOP_CODE_USE_START' and '// PLOP_CODE_USE_END' . 

On the line after the '// PLOP_CODE_USE_END' line, Add a line of code that returns ${functionName}Value. Surround the code use example with those 2 string patterns: '// PLOP_CODE_USE_RETURN_START' and '// PLOP_CODE_USE_RETURN_END' . 

On the line after the '// PLOP_CODE_USE_RETURN_END' line, Add the file extension for this language: ${functionLanguage}. This file extension must be without dot. Surround the file extension with those 2 string patterns: '// PLOP_CODE_EXTENSION_START' and '// PLOP_CODE_EXTENSION_END' . 

On the line after the '// PLOP_CODE_EXTENSION_END' line, Add an export line for the function ${functionName}, written in ${functionLanguage}. Surround the export line with those 2 string patterns: '// PLOP_CODE_EXPORT_START' and '// PLOP_CODE_EXPORT_END' . 

On the line after the '// PLOP_CODE_EXPORT_END' line, Add an import line for the function ${functionName}, written in ${functionLanguage}. The function's file path is this path: "${functionFilePathFromAppRoot}", as is. Add forward slashes to this path. Add the corresponding file extension to this path, if missing. Surround the import line with those 2 string patterns: '// PLOP_CODE_IMPORT_START' and '// PLOP_CODE_IMPORT_END' . 

On the line after the '// PLOP_CODE_IMPORT_END' line, Add an import line for the function ${functionName}, written in ${functionLanguage}. The function's file path is this path: "${relativePath}", as is. Add forward slashes to this path. Add the corresponding file extension to this path, if missing. Surround the import line with those 2 string patterns: '// PLOP_CODE_IMPORT_RELATIVE_START' and '// PLOP_CODE_IMPORT_RELATIVE_END' . 

On the line after the '// PLOP_CODE_IMPORT_RELATIVE_END' line, Add command line installation instructions for the libraries used. If the libraries are in javascript, use yarn instead of npm. Surround the command line installation instructions with those 2 string patterns: '// PLOP_COMMAND_LINE_INSTALL_START' and '// PLOP_COMMAND_LINE_INSTALL_END' . 

On the line after the '// PLOP_COMMAND_LINE_INSTALL_END' line, Add an inspiring quote full of wisdom. Surround the quote with those 2 string patterns: '// PLOP_INSPIRING_MESSAGE_START' and '// PLOP_INSPIRING_MESSAGE_END' . 
`.replace(/(\r\n|\n|\r)/gm, "");
}
export { getChatGPTFunctionPrompt };
