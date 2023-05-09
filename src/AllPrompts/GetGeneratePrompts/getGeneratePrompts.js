import { askForThingName as name } from "./askForThingName.js";
import {
  what_we_wanna_do,
  ask_for_subfolder,
  ask_for_js_file,
} from "./askWhatUserWants.js";
import { get_string_repo } from "./get_string_repo.js";
import { get_appbar_title_name } from "./get_appbar_title_name.js";
import { get_appbar_title_fr } from "./get_appbar_title_fr.js";
import { get_appbar_title_eng } from "./get_appbar_title_eng.js";
import { get_page_name } from "./get_page_name.js";
import { empty_db_msg_name } from "./empty_db_msg_name.js";
import { empty_db_msg_fr } from "./empty_db_msg_fr.js";
import { empty_db_msg_eng } from "./empty_db_msg_eng.js";
import { empty_db_btn_msg_name } from "./empty_db_btn_msg_name.js";
import { empty_db_btn_msg_fr } from "./empty_db_btn_msg_fr.js";
import { empty_db_btn_msg_eng } from "./empty_db_btn_msg_eng.js";
import { get_ai_service_language } from "./get_ai_service_language.js";
import { get_ai_service_args } from "./get_ai_service_args.js";
import { get_ai_service_description } from "./get_ai_service_description.js";
import { get_ai_service_return_value } from "./get_ai_service_return_value.js";
import { affine_subfolder } from "./affine_subfolder.js";
import { affine_file_where_we_use } from "./affine_file_where_we_use.js";
import { function_import_type } from "./function_import_type.js";
import { function_returns_or_not } from "./function_returns_or_not.js";
import { delete_function_body_or_not } from "./delete_function_body_or_not.js";

export function getGeneratePrompts(appRootPath) {
  return [
    what_we_wanna_do(appRootPath),

    // Donne un nom à ce truc que tu veux créer
    name(appRootPath),

    // permet d'affiner la recherche de sous dossier
    affine_subfolder(appRootPath),

    // Partant du dossier racine de l'appli,
    // dans quel sous dossier veux tu créer ce truc ?
    ask_for_subfolder(appRootPath),

    // permet d'affiner la recherche de fichier d'utilisation
    affine_file_where_we_use(appRootPath),

    // Dans quel fichier veux tu utiliser ce truc ?
    ask_for_js_file(appRootPath),

    // TOUT CECI EST LIER A L'I.A.
    // le prompt qui demande si on veut un path d'import absolu ou relatif (pour créateur de fonction via IA)
    function_import_type(appRootPath),

    // ajoute un prompt qui demande si on veut un usage de code avec,
    // ou sans return (pour créateur de fonction via IA)
    function_returns_or_not(appRootPath),

    // ajoute un prompt qui demande si on supprime, ou pas,
    // le contenu du body de la fonction ayant PLOP_INJECT_CODE dans so body,
    // en commentaire (pour créateur de fonction via IA)
    delete_function_body_or_not(appRootPath),

    // des questions spécifiques pour que l'I.A. suprème puisse effectuer sa magie
    get_ai_service_language(appRootPath),
    get_ai_service_args(appRootPath),
    get_ai_service_description(appRootPath),
    get_ai_service_return_value(appRootPath),

    // TOUT CECI EST LIER A L'I.A.
    // récup d'infos spécifiques a la création de page et subpage
    //
    get_string_repo,
    get_appbar_title_name,
    get_appbar_title_fr,
    get_appbar_title_eng,

    // récup d'infos spécifiques a la création de subpage seulement
    //
    get_page_name,

    // récup d'infos spécifiques a la création de page seulement
    //
    empty_db_msg_name,
    empty_db_msg_fr,
    empty_db_msg_eng,
    empty_db_btn_msg_name,
    empty_db_btn_msg_fr,
    empty_db_btn_msg_eng,
  ];
}
