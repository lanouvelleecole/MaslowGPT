export const ReplaceWordsInFolderAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    ReplaceWordsInFolder: ``,
  };
};

export const ReplaceWordsInFolderAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //ReplaceWordsInFolderFile: "plop-ReplaceWordsInFolders/hbs-files/<filename>.js.hbs",
    ReplaceWordsInFolder: ``,
    skipIfExists: true,
  };
};

export const ReplaceWordsInFolderAsyncAction = (promptData, appRootPath) => {
  return {
    type: "ReplaceWordsInFolder",
  };
};
