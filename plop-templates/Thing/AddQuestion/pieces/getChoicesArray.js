import { Constants } from "./Constants.js";

function getChoicesArray(promptData) {
  let basket = [];

  for (var i = 0; i < Constants.maxChoices; i++) {
    const choice_i_name = promptData[`choice_${i}_name`];
    const choice_i_exists = choice_i_name?.length > 0;

    if (choice_i_exists) {
      basket.push([
        [
          promptData[`choice_${i}_name`],
          promptData[`choice_${i}_string_name`],
          promptData[`choice_${i}_string_fr`],
          promptData[`choice_${i}_string_eng`],
          promptData[`choice_${i}_value`],
        ],
      ]);
    }
  }

  return basket;
}
export { getChoicesArray };
