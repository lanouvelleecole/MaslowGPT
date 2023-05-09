import I18n from "i18n-js";
import { answers, OPENAI_API_KEY } from "../../../index.js";
import { TranslateText } from "../../../src/services/TranslateText/TranslateText.js";
import { userChoices } from "../../../src/AllPrompts/GetGeneratePrompts/askWhatUserWants.js";

const get_appbar_title_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_appbar_title_eng",
  default: (data) =>
    Promise.resolve(
      TranslateText({
        text: answers.get_appbar_title_fr,
        language: "english",
        apiKey: OPENAI_API_KEY,
      })
    ) ?? "Title",
  message: I18n.t("xXJW3ibu"),
  when: function (data) {
    return [userChoices.createPage, userChoices.createSubpage].includes(
      answers.what_we_wanna_do
    );
  },
};
export { get_appbar_title_eng };
