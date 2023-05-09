/* PLOP_INJECT_IMPORT */

import { answers } from "../../../index.js";

// Create a function called PromptUserWithoutPrompting
const PromptUserWithoutPrompting = async (prompts) => {
  // For each prompt in prompts
  for (let prompt of prompts) {
    /*console.log(
      `single prompt (default value): ${
        typeof prompt.default == "function" ? prompt.default() : prompt.default
      }`
    );*/
    const prompt_name = prompt.name;
    const prompt_filter = prompt.filter;
    const prompt_default = prompt.default;
    const prompt_validate = prompt.validate;

    // Define the answer in answers
    if (typeof prompt_default == "function") {
      answers[prompt_name] = await prompt_default();
    } else if (typeof prompt_default == "string") {
      answers[prompt_name] = prompt_default;
    }

    if (prompt_filter) {
      answers[prompt_name] = prompt_filter(answers[prompt_name]);
    }

    const prompt_answer = answers[prompt_name];

    if (prompt_validate && !prompt_validate(prompt_answer)) {
      throw Error(
        `The default value of this prompt is not valid: ${prompt_answer}`
      );
    }
  }
  // Return the answers, or null if an error happen
  return answers;
};

export default PromptUserWithoutPrompting;
