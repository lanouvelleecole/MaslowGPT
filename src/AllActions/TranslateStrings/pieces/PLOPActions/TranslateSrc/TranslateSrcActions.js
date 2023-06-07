export const TranslateSrcAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    TranslateSrc: ``,
  };
};

export const TranslateSrcAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //TranslateSrcFile: "plop-TranslateSrcs/hbs-files/<filename>.js.hbs",
    TranslateSrc: ``,
    skipIfExists: true,
  };
};

export const TranslateSrcAsyncAction = (promptData, appRootPath) => {
  return {
    type: "TranslateSrc",
  };
};
