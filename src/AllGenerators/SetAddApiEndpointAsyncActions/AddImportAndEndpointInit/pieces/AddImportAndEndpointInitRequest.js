import { GetChatGPTOutput } from "../../../../services/GetChatGPTOutput/GetChatGPTOutput.js";
import { InjectStuffUnderPatterns } from "../../../../services/InjectStuffUnderPatterns/InjectStuffUnderPatterns.js";
import { MakeLoadingSpinner } from "../../../../services/MakeLoadingSpinner/MakeLoadingSpinner.js";

async function AddImportAndEndpointInitRequest(
  answers,
  appRootPath,
  printMsg = true
) {
  try {
    InjectStuffUnderPatterns(`${appRootPath}/index.js`, [
      {
        pattern: `/* PLOP_INJECT_IMPORT */`,
        stuffUnderPattern: `import { ${answers["EndpointName"]}Endpoint } from "./src/endpoints/${answers["EndpointName"]}Endpoint/${answers["EndpointName"]}Endpoint.js";`,
        deletePreviousStuff: false,
        indent: true,
      },
      {
        pattern: `/* PLOP_INJECT_ENDPOINT_INIT */`,
        stuffUnderPattern: `
// crée un endpoint nommé ${answers["EndpointName"]}
// reachable via http://localhost:<apiPort>/${answers["EndpointName"]}
${answers["EndpointName"]}Endpoint(app, stripeInstance);
`,
        deletePreviousStuff: false,
        indent: true,
      },
    ]);
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export { AddImportAndEndpointInitRequest };
