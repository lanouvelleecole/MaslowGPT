function initHTDPAndCie(actualJsFile, subfolder) {
  return [
    // ajoute import de useState, si possible
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `// import { useState } from "react";`,
      abortOnFail: false,
      when: (data) => {
        return actualJsFile != null;
      },
    },
    // ajoute import de Data Definition,
    // si possible
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
\t{{pascalCase name}}
} from "${subfolder}/{{pascalCase name}}/{{pascalCase name}}";`,
      abortOnFail: false,
      when: (data) => {
        return actualJsFile != null;
      },
    },
    // ajoute import de useState, si possible
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t// const [{{name}}, set{{pascalCase name}}] = useState({{pascalCase name}}.{{pascalCase name}}1);`,
      abortOnFail: false,
      when: (data) => {
        return actualJsFile != null;
      },
    },
  ];
}
export { initHTDPAndCie };
