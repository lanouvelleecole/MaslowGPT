import I18n from "i18n-js";
import { answers, OPENAI_API_KEY } from "../../../index.js";
import { TranslateText } from "../../../src/services/TranslateText/TranslateText.js";
import { userChoices } from "./askWhatUserWants.js";

const empty_db_msg_eng = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "empty_db_msg_eng",
  default: (data) =>
    Promise.resolve(
      TranslateText({
        text:
          answers.empty_db_msg_fr ?? "Page vide ! Remplis moi s'il te plaît.",
        language: "english",
        apiKey: OPENAI_API_KEY,
      })
    ),
  message: I18n.t("x0Jv35yF"),
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createPage;
  },
};
export { empty_db_msg_eng };
