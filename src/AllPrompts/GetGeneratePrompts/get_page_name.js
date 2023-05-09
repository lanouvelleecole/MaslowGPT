import I18n from "i18n-js";
import { answers } from "../../../index.js";
import { userChoices } from "../../../src/AllPrompts/GetGeneratePrompts/askWhatUserWants.js";

const get_page_name = {
  type: "input",

  filter: function (answer) {
    // Use the trim() method to remove whitespace from both sides of the answer
    return answer.trim();
  },

  name: "get_page_name",
  message: I18n.t("x0gbEzB1"),
  when: function (data) {
    return answers.what_we_wanna_do === userChoices.createSubpage;
  },
};
export { get_page_name };
