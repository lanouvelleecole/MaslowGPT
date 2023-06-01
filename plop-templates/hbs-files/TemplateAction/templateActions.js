export const templateAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    template: ``,
  };
};

export const templateAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //templateFile: "plop-templates/hbs-files/<filename>.js.hbs",
    template: ``,
    skipIfExists: true,
  };
};

export const templateAsyncAction = (promptData, appRootPath) => {
  return {
    type: "template",
  };
};
