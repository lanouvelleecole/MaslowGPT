// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "TutorielsState";

/* ***** !!!!! IMPORTANT !!!!! ***** 

Il faut remplacer les 3 ptits points TutorielsState par le nom de la page / du component correspondant.

******** !!!!! IMPORTANT !!!!! ***** */

/* ***** POUR ITEM DE LISTE VERTICALE ***** */

// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // la catégorie du tuto
  category: "INTEGER",

  // date de création du tuto
  creation_year: "INTEGER",
  creation_month: "INTEGER",
  creation_day: "INTEGER",
  creation_hour: "INTEGER",
  creation_minute: "INTEGER",
  creation_second: "INTEGER",

  // le combien-tième ajout ?
  itemIndex: "INTEGER",

  // cet item fait partie d'un groupe ?
  // si oui,
  // ceci représente le nom du groupe auquel il appartient
  groupName: "TEXT",

  // identifiant
  uniqueId: "TEXT",
};

/* ************************************** */
