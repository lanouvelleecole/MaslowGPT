export const ExtractSrcObjectAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    ExtractSrcObject: ``,
  };
};

export const ExtractSrcObjectAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //ExtractSrcObjectFile: "plop-ExtractSrcObjects/hbs-files/<filename>.js.hbs",
    ExtractSrcObject: ``,
    skipIfExists: true,
  };
};

export const ExtractSrcObjectAsyncAction = (promptData, appRootPath) => {
  return {
    type: "ExtractSrcObject",
  };
};
