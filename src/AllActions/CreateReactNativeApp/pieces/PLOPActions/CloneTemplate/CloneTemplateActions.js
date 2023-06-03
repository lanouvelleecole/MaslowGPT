export const CloneTemplateAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    CloneTemplate: ``,
  };
};

export const CloneTemplateAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //CloneTemplateFile: "plop-CloneTemplates/hbs-files/<filename>.js.hbs",
    CloneTemplate: ``,
    skipIfExists: true,
  };
};

export const CloneTemplateAsyncAction = (promptData, appRootPath) => {
  return {
    type: "CloneTemplate",
  };
};
