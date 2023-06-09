import { question_type } from "./question_type.js";
import { questionnaire_folder_path } from "./questionnaire_folder_path.js";
import { questionnaire_file_name } from "./questionnaire_file_name.js";
import { repo_name } from "./repo_name.js";
import { description_string_name } from "./description_string_name.js";
import { description_string_src } from "./description_string_src.js";
import { error_string_name } from "./error_string_name.js";
import { error_string_src } from "./error_string_src.js";
import { question_choices } from "./question_choices.js";
import { question_page_name } from "./question_page_name.js";
import { question_default_answer } from "./question_default_answer.js";
import { question_default_textinput } from "./question_default_textinput.js";
import { question_validity_condition } from "./question_validity_condition.js";
import { row_name } from "./row_name.js";
import { databaseinfo_path } from "./databaseinfo_path.js";
import { question_DB_save_path } from "./question_DB_save_path.js";
import { question_on_textinput_changed } from "./question_on_textinput_changed.js";
import { question_DB_edit_path } from "./question_DB_edit_path.js";
import { row_type } from "./row_type.js";
import { row_default_value } from "./row_default_value.js";
import { affine_questionnaire } from "./affine_questionnaire.js";
import { question_name } from "./question_name.js";

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

    description_string_src,

    error_string_name,

    error_string_src,

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
