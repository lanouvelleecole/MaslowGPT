import I18n from "i18n-js";
import { RegenerateAIFunction } from "../../services/RegenerateAIFunction/RegenerateAIFunction.js";

export async function RegenerateAIFunctionCommand() {
  const appRootPath = process.cwd();

  // le yyy de la commande maslow xxx yyy
  const funcPath = process.argv[3];

  // RE MAGIE, si y'a path
  if (funcPath?.length > 0) {
    await RegenerateAIFunction(appRootPath, funcPath);
  } else {
    console.log(I18n.t("xqzeuOsM"));
  }
}
