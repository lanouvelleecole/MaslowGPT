export const SetNewAIModelAppendAction = (promptData, appRootPath) => {
  return {
    type: "append",
    path: `${process.cwd()}/.../....js`,

    pattern: ``,
    SetNewAIModel: ``,
  };
};

export const SetNewAIModelAddAction = (promptData, appRootPath) => {
  return {
    type: "add",

    path: `${process.cwd()}/....../.......js`,
    //SetNewAIModelFile: "plop-SetNewAIModels/hbs-files/<filename>.js.hbs",
    SetNewAIModel: ``,
    skipIfExists: true,
  };
};

export const SetNewAIModelAsyncAction = (promptData, appRootPath) => {
  return {
    type: "SetNewAIModel",
  };
};
