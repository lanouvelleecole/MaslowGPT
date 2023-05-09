import { CreateFileFromScratch } from '../../CreateFileFromScratch/CreateFileFromScratch.js';
import path from "path";

function createFullMaslowJSONFile(appRootPath, answers) {
  const maslowJSONPath = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/Maslow.json`
  );

  const get_ai_service_language_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_language.txt`
  );

  const get_ai_service_args_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_args.txt`
  );

  const get_ai_service_description_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_description.txt`
  );

  const get_ai_service_return_value_txt_path = path.join(
    appRootPath,
    `${answers.ask_for_subfolder}/${answers.name}/prompts/get_ai_service_return_value.txt`
  );

  const answersWithoutGoldCaviar = {
    ...answers,
    gold_caviar: null,
  };

  CreateFileFromScratch(
    get_ai_service_description_txt_path,
    answers.get_ai_service_description
  );

  CreateFileFromScratch(
    get_ai_service_return_value_txt_path,
    answers.get_ai_service_return_value
  );

  CreateFileFromScratch(
    get_ai_service_args_txt_path,
    answers.get_ai_service_args
  );

  CreateFileFromScratch(
    get_ai_service_language_txt_path,
    answers.get_ai_service_language
  );

  CreateFileFromScratch(
    maslowJSONPath,
    JSON.stringify(
      {
        ...answers.gold_caviar,

        ...answersWithoutGoldCaviar,
      },
      null,
      2
    )
  );
}
export { createFullMaslowJSONFile };
