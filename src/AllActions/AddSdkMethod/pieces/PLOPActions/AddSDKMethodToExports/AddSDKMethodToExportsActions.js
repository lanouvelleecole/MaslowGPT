export const AddSDKMethodToExportsAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    AddSDKMethodToExports: ``,
  };
};

export const AddSDKMethodToExportsAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //AddSDKMethodToExportsFile: "plop-AddSDKMethodToExportss/hbs-files/<filename>.js.hbs",
    AddSDKMethodToExports: ``,
    skipIfExists: true,
  };
};

export const AddSDKMethodToExportsAsyncAction = (promptData, appRootPath) => {
  return {
    type: "AddSDKMethodToExports",
  };
};
