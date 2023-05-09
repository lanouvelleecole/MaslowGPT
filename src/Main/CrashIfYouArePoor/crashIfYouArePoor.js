import I18n from "i18n-js";
import { OPENAI_API_KEY } from "../../../index.js";

export function crashIfYouArePoor() {
  //console.log(`openai API key: ${OPENAI_API_KEY}`);
  if (OPENAI_API_KEY == null) {
    throw Error(I18n.t("xInKYUuv"));
  }
}
