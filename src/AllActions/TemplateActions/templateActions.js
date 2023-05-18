import { createTemplateFolder1 } from "./pieces/createTemplateFolder1/createTemplateFolder1.js";
//import { createTemplateFolder2 } from "./pieces/createTemplateFolder2/createTemplateFolder2.js";
//import { createTemplateFolder3 } from "./pieces/createTemplateFolder3/createTemplateFolder3.js";
//import { createTemplateFolder4 } from "./pieces/createTemplateFolder4/createTemplateFolder4.js";
//import { createTemplateFolder5 } from "./pieces/createTemplateFolder5/createTemplateFolder5.js";
//import { createTemplateFolder6 } from "./pieces/createTemplateFolder6/createTemplateFolder6.js";
//import { createTemplateFolder7 } from "./pieces/createTemplateFolder7/createTemplateFolder7.js";
//import { createTemplateFolder8 } from "./pieces/createTemplateFolder8/createTemplateFolder8.js";
//import { createTemplateFolder9 } from "./pieces/createTemplateFolder9/createTemplateFolder9.js";

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 * // ADD_MASLOW_COMMAND_4
 *
 * Ici, crée 0 ou plusieurs actions
 */
function templateActions(appRootPath, promptData) {
  const templateFolder1 = createTemplateFolder1(promptData);
  //const templateFolder2 = createTemplateFolder2(promptData);
  //const templateFolder3 = createTemplateFolder3(promptData);
  //const templateFolder4 = createTemplateFolder4(promptData);
  //const templateFolder5 = createTemplateFolder5(promptData);
  //const templateFolder6 = createTemplateFolder6(promptData);
  //const templateFolder7 = createTemplateFolder7(promptData);
  //const templateFolder8 = createTemplateFolder8(promptData);
  //const templateFolder9 = createTemplateFolder9(promptData);

  return [
    ...templateFolder1,
    //...templateFolder2,
    //...templateFolder3,
    //...templateFolder4,
    //...templateFolder5,
    //...templateFolder6,
    //...templateFolder7,
    //...templateFolder8,
    //...templateFolder9,
  ];
}

export { templateActions };
