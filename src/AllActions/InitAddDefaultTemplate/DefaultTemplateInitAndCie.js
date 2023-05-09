/**
 *
 * args:
 *
 * return .....
 *
 * This function .......
 */
export function defaultTemplateInitAndCie() {
  return [
    {
      type: "add",
      path: `${process.cwd()}/src/reduxState/reduxStore.js`,
      templateFile: "plop-templates/hbs-files/reduxStore.js.hbs",
      skipIfExists: true,
    },
  ];
}
