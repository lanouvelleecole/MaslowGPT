import { addEnglishStringsForSubpage } from "./addEnglishStringsForSubpage.js";
import { addFrenchStringsForSubpage } from "./addFrenchStringsForSubpage.js";

function createSubpageInitAndCie({
  subfolder,
  pageAndSubpageData,
  actualJsFile,
}) {
  return [
    // france
    addFrenchStringsForSubpage(pageAndSubpageData),

    // engliche
    addEnglishStringsForSubpage(pageAndSubpageData),

    // inject d'import de subpage dans page
    subpage_import(pageAndSubpageData, actualJsFile),

    // inject de subpage camouflée
    subpage_component(pageAndSubpageData, actualJsFile),
  ];
}

const subpage_import = (pageAndSubpageData, actualJsFile) => {
  return {
    type: "append",
    path: `${process.cwd()}/${actualJsFile}`,

    // Pattern tells plop where in the file to inject the template
    pattern: `/* PLOP_INJECT_IMPORT */`,
    template: `import { 
  {{pascalCase name}} 
} from '../../../../../pieces/{{pascalCase name}}/{{pascalCase name}}.js';`,
    when: (data) => {
      return actualJsFile != null;
    },
  };
};

const subpage_component = (pageAndSubpageData, actualJsFile) => {
  return {
    type: "append",
    path: `${process.cwd()}/${actualJsFile}`,

    // Pattern tells plop where in the file to inject the template
    pattern: `{/* PLOP_INJECT_SUBPAGE */}`,
    template: `
\t\t\t<{{pascalCase name}} />`,
    when: (data) => {
      return actualJsFile != null;
    },
  };
};

export { createSubpageInitAndCie };
