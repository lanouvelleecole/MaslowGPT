export const AddImportAndEndpointInitAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    AddImportAndEndpointInit: ``,
  };
};

export const AddImportAndEndpointInitAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //AddImportAndEndpointInitFile: "plop-AddImportAndEndpointInits/hbs-files/<filename>.js.hbs",
    AddImportAndEndpointInit: ``,
    skipIfExists: true,
  };
};

export const AddImportAndEndpointInitAsyncAction = (promptData, appRootPath) => {
  return {
    type: "AddImportAndEndpointInit",
  };
};
