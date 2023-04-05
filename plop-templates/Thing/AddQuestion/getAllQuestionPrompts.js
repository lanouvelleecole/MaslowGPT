import { question_name } from "./prompts/question_name.js";
import { question_type } from "./prompts/question_type.js";
import { questionnaire_folder_path } from "./prompts/questionnaire_folder_path.js";
import { questionnaire_file_name } from "./prompts/questionnaire_file_name.js";
import { repo_name } from "./prompts/repo_name.js";
import { description_string_name } from "./prompts/description_string_name.js";
import { description_string_fr } from "./prompts/description_string_fr.js";
import { description_string_eng } from "./prompts/description_string_eng.js";
import { error_string_name } from "./prompts/error_string_name.js";
import { error_string_fr } from "./prompts/error_string_fr.js";
import { error_string_eng } from "./prompts/error_string_eng.js";
import { question_choices } from "./prompts/question_choices.js";
import { question_page_name } from "./prompts/question_page_name.js";
import { question_default_answer } from "./prompts/question_default_answer.js";
import { question_default_textinput } from "./prompts/question_default_textinput.js";
import { question_validity_condition } from "./prompts/question_validity_condition.js";
import { row_name } from "./row_name.js";
import { databaseinfo_path } from "./databaseinfo_path.js";
import { question_DB_save_path } from "./question_DB_save_path.js";
import { question_on_textinput_changed } from "./question_on_textinput_changed.js";
import { question_DB_edit_path } from "./question_DB_edit_path.js";
import { row_type } from "./row_type.js";
import { row_default_value } from "./row_default_value.js";
import { affine_questionnaire } from "./prompts/affine_questionnaire.js";

function getAllQuestionPrompts(appRootPath) {
  const question_choices_list = question_choices(15);

  return [
    question_type,

    question_name,

    affine_questionnaire,

    questionnaire_folder_path(appRootPath),

    questionnaire_file_name(appRootPath),

    repo_name(appRootPath),

    description_string_name,

    description_string_fr,

    description_string_eng,

    error_string_name,

    error_string_fr,

    error_string_eng,

    ...question_choices_list,

    question_page_name,

    question_default_answer,

    question_default_textinput,

    question_on_textinput_changed,

    question_validity_condition,

    question_DB_save_path(appRootPath),

    question_DB_edit_path(appRootPath),

    databaseinfo_path(appRootPath),

    row_name,

    row_type,

    row_default_value,
  ];
}
export { getAllQuestionPrompts };
