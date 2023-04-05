function initWorkHTTPAndCie(actualJsFile, subfolder) {
  return [
    // subfolder = root du dossier contenant le WorkList

    // Ajoute l'import de Work
    // dans le fichier `${subfolder}/GetWorkers/GetWorkers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkers/GetWorkers.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  {{pascalCase name}}Work
} from "${subfolder}/AllWorks/{{pascalCase name}}/{{pascalCase name}}Work";`,
    },

    // Ajoute l'import de Work saver
    // dans le fichier `${subfolder}/GetWorkSavers/GetWorkSavers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkSavers/GetWorkSavers.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  Save{{pascalCase name}}Work
} from "${subfolder}/AllWorks/{{pascalCase name}}/Save{{pascalCase name}}Work";`,
    },

    // Ajoute l'import de Work progress
    // dans le fichier `${subfolder}/GetWorkProgressCallbacks/GetWorkProgressCallbacks.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkProgressCallbacks/GetWorkProgressCallbacks.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  Progress{{pascalCase name}}Work
} from "${subfolder}/AllWorks/{{pascalCase name}}/Progress{{pascalCase name}}Work";`,
    },

    // Ajoute l'import de Work cancel grabber
    // dans le fichier `${subfolder}/GetWorkCancelGrabbers/GetWorkCancelGrabbers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkCancelGrabbers/GetWorkCancelGrabbers.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  Grab{{pascalCase name}}Canceller
} from "${subfolder}/AllWorks/{{pascalCase name}}/Grab{{pascalCase name}}Canceller";`,
    },

    // Ajoute l'import de Work canceller
    // dans le fichier `${subfolder}/GetWorkCancellers/GetWorkCancellers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkCancellers/GetWorkCancellers.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  Cancel{{pascalCase name}}
} from "${subfolder}/AllWorks/{{pascalCase name}}/Cancel{{pascalCase name}}";`,
    },

    // ************************

    // Ajoute la référence de Work
    // dans le fichier `${subfolder}/GetWorkers/GetWorkers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkers/GetWorkers.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}: {{pascalCase name}}Work,`,
    },

    // Ajoute la référence de Work saver
    // dans le fichier `${subfolder}/GetWorkSavers/GetWorkSavers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkSavers/GetWorkSavers.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}: Save{{pascalCase name}}Work,`,
    },

    // Ajoute la référence de Work progress
    // dans le fichier `${subfolder}/GetWorkProgressCallbacks/GetWorkProgressCallbacks.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkProgressCallbacks/GetWorkProgressCallbacks.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}: Progress{{pascalCase name}}Work,`,
    },

    // Ajoute la référence de Work cancel grabber
    // dans le fichier `${subfolder}/GetWorkCancelGrabbers/GetWorkCancelGrabbers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkCancelGrabbers/GetWorkCancelGrabbers.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}: Grab{{pascalCase name}}Canceller,`,
    },

    // Ajoute la référence de Work canceller
    // dans le fichier `${subfolder}/GetWorkCancellers/GetWorkCancellers.js`
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/GetWorkCancellers/GetWorkCancellers.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t\t{{pascalCase name}}: Cancel{{pascalCase name}},`,
    },

    // ajoute le Work dans le WorkList (import)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/OnCreateSaveWork/OnCreateSaveWork.js`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `import {
  Add{{pascalCase name}}Work
} from "${subfolder}/AllWorks/{{pascalCase name}}/Add{{pascalCase name}}Work";`,
    },

    // ajoute le Work dans le WorkList (function call)
    {
      type: "append",
      path: `${process.cwd()}/${subfolder}/OnCreateSaveWork/OnCreateSaveWork.js`,
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\n\t// Permet ...\n\tawait Add{{pascalCase name}}Work({ workList, initialWorkData });`,
    },
  ];
}

export { initWorkHTTPAndCie };
