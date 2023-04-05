function addPageLatestCurrentItem(promptData, questionFolderPath, outputs) {
  // ajoute une référence de l'item de page en cours de créa/modif.
  const questionPageName = promptData["question_page_name"];
  const conditionIsMet = questionPageName.length > 0;
  const plopAction = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}.js`,
    pattern: `/* PLOP_INJECT_CODE */`,
    template: `
\tconst {{pascalCase question_page_name}}State = SqliteRedux{{pascalCase question_page_name}}State.Get{{pascalCase question_page_name}}StateFirstRow();
\tconst currentItemUniqueId = {{pascalCase question_page_name}}State.itemUniqueId;
\tconst currentItem = SqliteRedux{{pascalCase question_page_name}}.GetItemByUniqueID(currentItemUniqueId);
`,
  };

  // ajoute une fonction SaveCurrentItem, qui permet de sauvegarder
  // un item de page, si besoin
  const plopAction2 = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/GettersSetters/SaveCurrentItem.js`,
    pattern: `/* PLOP_INJECT_CODE */`,
    template: `
  SqliteRedux{{pascalCase question_page_name}}.UpdateSpecificRowsFromDB({
    row: currentItem,
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
  });
`,
  };

  // l'ajout d'import de setter dans SaveCurrentItem
  const plopImport = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/GettersSetters/SaveCurrentItem.js`,

    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `
import { 
  SqliteRedux{{pascalCase question_page_name}} 
} from "src/reduxState/{{pascalCase question_page_name}}/{{pascalCase question_page_name}}GetterSetter";
`,
  };

  // ajoute import de SaveCurrentItem dans question
  const plopImport2 = {
    type: "append",
    path: `${process.cwd()}/${questionFolderPath}/{{pascalCase question_name}}.js`,
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `
import { 
  SaveCurrentItem 
} from "./GettersSetters/SaveCurrentItem.js";
`,
  };

  if (conditionIsMet) {
    outputs.push(plopAction, plopAction2, plopImport2, plopImport);
  }
}

export { addPageLatestCurrentItem };
