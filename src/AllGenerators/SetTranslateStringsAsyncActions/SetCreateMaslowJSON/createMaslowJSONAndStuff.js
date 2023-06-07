import path from "path";
import { CreateFileFromScratch } from "../../../services/CreateFileFromScratch/CreateFileFromScratch.js";

export function createMaslowJSONAndStuff(appRootPath, answers) {
  const maslowJSONPath = path.join(
    appRootPath,
    `${answers.GptQuestionName}/Maslow.json`
  );

  const question_txt_path = path.join(
    appRootPath,
    `${answers.GptQuestionName}/question.txt`
  );

  const answer_txt_path = path.join(
    appRootPath,
    `${answers.GptQuestionName}/answer.txt`
  );

  CreateFileFromScratch(answer_txt_path, answers.chat_gpt_output);

  CreateFileFromScratch(question_txt_path, answers.TranslateStrings);

  CreateFileFromScratch(
    maslowJSONPath,
    JSON.stringify(
      {
        question: answers.TranslateStrings,
        questionPath: question_txt_path,
        answer: answers.chat_gpt_output,
        answerPath: answer_txt_path,
      },
      null,
      2
    )
  );
}
