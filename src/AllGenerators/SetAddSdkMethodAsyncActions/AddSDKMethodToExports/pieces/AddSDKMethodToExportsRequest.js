import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { InjectStuffUnderPatterns } from "../../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function AddSDKMethodToExportsRequest(
  answers,
  appRootPath,
  printMsg = true
) {
  try {
    InjectStuffUnderPatterns(`${appRootPath}/src/index.ts`, [
      {
        pattern: `/* PLOP_INJECT_IMPORT */`,
        stuffUnderPattern: `import { ${answers["SDKMethodName"]} } from "./services/${answers["SDKMethodName"]}/${answers["SDKMethodName"]}";`,
        deletePreviousStuff: false,
        indent: true,
      },
      {
        pattern: `/* PLOP_INJECT_SDK_METHOD */`,
        stuffUnderPattern: `
  ${answers["SDKMethodName"]},
`,
        deletePreviousStuff: false,
        indent: true,
      },
    ]);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export { AddSDKMethodToExportsRequest };
