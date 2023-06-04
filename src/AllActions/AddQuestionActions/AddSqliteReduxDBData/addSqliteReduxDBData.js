import { addAnswerRowToEditFileIfNeeded } from "./addAnswerRowToEditFileIfNeeded.js";
import { addAnswerRowToSaveFileIfNeeded } from "./addAnswerRowToSaveFileIfNeeded.js";
import { addAnswerVarToEditFileIfNeeded } from "./addAnswerVarToEditFileIfNeeded.js";
import { addAnswerVarToSaveFileIfNeeded } from "./addAnswerVarToSaveFileIfNeeded.js";
import { addRowDefaultValueIfNeeded } from "./addRowDefaultValueIfNeeded.js";
import { addRowNameAndTypeIfNeeded } from "./addRowNameAndTypeIfNeeded.js";
import { Constants } from "../../../AppConstants/Constants.js";
import { toPascalCase } from "../../../services/ToPascalCase/ToPascalCase.js";

/**
 *
 * @param {*} promptData
 * @param {*} questionFolderPath
 * @param {*} outputs
 *
 * Ajoute la réponse, si besoin, dans la DB SqliteRedux souhaitée,
 *
 *  question_DB_save_path,
 *  question_DB_edit_path,
 *  databaseinfo_path,
 *  row_name,
 *  row_type,
 *  row_default_value
 *
 *
 */
function addSqliteReduxDBData(promptData, questionFolderPath, outputs) {
  // le path de save existe t'il ?
  const question_DB_save_path = promptData["question_DB_save_path"];
  const question_DB_save_path_exists =
    question_DB_save_path != Constants.noChoice;

  // le path de modif existe t'il ?
  const question_DB_edit_path = promptData["question_DB_edit_path"];
  const question_DB_edit_path_exists =
    question_DB_edit_path != Constants.noChoice;

  // le path de base de données existe t'il ?
  const databaseinfo_path = promptData["databaseinfo_path"];
  const databaseinfo_path_exists = databaseinfo_path != Constants.noChoice;

  // le nom de row de base de données existe t'il ?
  const rowName = promptData["row_name"];
  const rowNameExists = rowName?.length > 0;

  // le type de row de base de données existe t'il ?
  const rowType = promptData["row_type"];
  const rowTypeExists = rowType?.length > 0;

  // la valeur par défaut de row de base de données existe t'il ?
  const rowDefaultValue = promptData["row_default_value"];
  const rowDefaultValueExists = rowDefaultValue?.length > 0;

  // le nom de la question
  const question_name = toPascalCase(promptData["question_name"]);

  // si un path de fichier de sauvegarde CRUD existe,
  // et que un rowName existe, alors stocke ce rowName parmi dans la section
  /* PLOP_INJECT_ANSWER_VALUE */
  addAnswerVarToSaveFileIfNeeded(
    question_DB_save_path_exists,
    rowNameExists,
    question_DB_save_path,
    rowName,
    question_name,
    outputs
  );

  // si un path de fichier de sauvegarde crud existe,
  // et que un rowName existe, alors stocke ce rowName parmi dans la section
  /* PLOP_INJECT_VALUE_IN_DB */
  addAnswerRowToSaveFileIfNeeded(
    question_DB_save_path_exists,
    rowNameExists,
    question_DB_save_path,
    rowName,
    outputs
  );

  // si un path de fichier de modif CRUD existe,
  // et que un rowName existe, alors stocke ce rowName parmi dans la section
  /* PLOP_INJECT_ANSWER_VALUE */
  addAnswerVarToEditFileIfNeeded(
    question_DB_edit_path_exists,
    rowNameExists,
    question_DB_edit_path,
    rowName,
    question_name,
    outputs
  );

  // si un path de fichier de modif crud existe,
  // et que un rowName existe, alors stocke ce rowName parmi dans la section
  /* PLOP_INJECT_VALUE_IN_DB */
  addAnswerRowToEditFileIfNeeded(
    question_DB_edit_path_exists,
    rowNameExists,
    question_DB_edit_path,
    rowName,
    outputs
  );

  // si un path de fichier databaseinfo.js existe,
  // et que un rowType existe, alors stocke ce rowName, et rowType  dans la section
  // PLOP_INJECT_DB_ROW
  addRowNameAndTypeIfNeeded(
    databaseinfo_path_exists,
    rowTypeExists,
    databaseinfo_path,
    rowName,
    rowType,
    outputs
  );

  // si un path de fichier databaseinfo.js existe,
  // et que un rowDefaultValue existe, alors stocke ce rowName, et rowDefaultValue  dans la section
  // PLOP_INJECT_DEFAULT_STATE_VALUE
  addRowDefaultValueIfNeeded(
    databaseinfo_path_exists,
    rowDefaultValueExists,
    databaseinfo_path,
    rowName,
    rowDefaultValue,
    outputs
  );
}

export { addSqliteReduxDBData };
