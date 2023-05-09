import { ask_for_js_file_string } from "./ask_for_js_file_string.js";
import {
  string_name,
  string_fr,
  string_eng,
  string_repo_file_path,
} from "./askForStringName.js";

import { string_repo_folder_path } from "./string_repo_folder_path.js";
import { affine_file_where_we_use_string } from "./affine_file_where_we_use_string.js";
import { affine_string_repo } from "./affine_string_repo.js";

export function getAddStringPrompts(appRootPath) {
  return [
    affine_string_repo,
    string_repo_folder_path(appRootPath),
    string_repo_file_path(appRootPath),
    affine_file_where_we_use_string(appRootPath),
    ask_for_js_file_string(appRootPath),
    string_name,
    string_fr,
    string_eng,
  ];
}
