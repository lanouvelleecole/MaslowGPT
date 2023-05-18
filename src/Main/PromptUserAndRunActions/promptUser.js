import inquirer from "inquirer";
import { answers } from "../../../index.js";
import { createNPMMaslowJSONFile } from "../../services/CreateNPMMaslowJSONFile/createNPMMaslowJSONFile.js";
import { getDataFromNPMMaslowJSON } from "../../services/GetDataFromNPMMaslowJSONObj/getDataFromNPMMaslowJSONObj.js";

/**
 *
 * @param {*} prompts, une liste de prompts (inquirer.js)
 *
 * @returns une boucle de i/o
 *
 */
export async function PromptUser(prompts) {
  // l'index de la question en cours de visionnage
  let currentIndex = 0;

  // le précédent index visionné
  let previousIndex = null;

  // tant qu'on n'a pas dépassé le dernier prompt,
  // alors restons dans la boucle
  while (currentIndex < prompts.length) {
    // le prompt actuel
    const prompt = prompts[currentIndex];

    if (prompt.default == null) {
      prompt.default = (data) => {
        return getDataFromNPMMaslowJSON(prompt.name);
      };
    }

    //const prompt = CopyObjectWithCallbacks(prompt_og);
    //AddBackMsg(prompt, currentIndex);

    console.log(`\n`);

    const currentAnswers = await inquirer.prompt(prompt);

    const currentAnswerValue = currentAnswers[prompt.name];
    let currentValidator = prompt.validate;
    let currentValidatorValue = true;

    if (currentValidator != null) {
      currentValidatorValue = currentValidator(currentAnswerValue);
    }

    if (currentAnswerValue === `<`) {
      currentIndex > 0 ? (currentIndex = previousIndex) : console.log(``);
      previousIndex = currentIndex === 0 ? null : currentIndex - 1;
    } else {
      answers[prompt.name] = currentAnswerValue;

      createNPMMaslowJSONFile(answers);

      previousIndex = currentIndex;

      // si la validation est OK, passe au suivant
      // sinon reste ici
      currentValidatorValue ? currentIndex++ : 42;
    }
  }

  return answers;
}
