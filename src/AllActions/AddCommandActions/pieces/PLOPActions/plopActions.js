export const templateAppendPlopAction = {
  type: "append",
  path: `${process.cwd()}/.../....js`,

  pattern: ``,
  template: ``,
  //templateFile: "plop-templates/hbs-files/<filename>.js.hbs",
};

export const templateAddPlopAction = {
  type: "add",
  force: true,
  path: `${process.cwd()}/....../.......js`,
  //templateFile: "plop-templates/hbs-files/<filename>.js.hbs",
  template: ``,
  skipIfExists: true,
};
