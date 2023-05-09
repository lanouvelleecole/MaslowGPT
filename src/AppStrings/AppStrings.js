/* PLOP_INJECT_IMPORT */

import i18n from "i18n-js";

/**
 * AppStrings
 * est une bibliothèque de strings multilingues
 *
 * il faut initialiser cette bibliothèque dans App.js,
 * avec la fonction d'init
 *
 */

// les strings selon pays
i18n.translations = {
  en: {
    /* PLOP_INJECT_ENG_STRING */
    xtWQiwJ7: `Installing all the things necessary for Maslow to function... Please wait...`,
    xWtfTMu: `Translation of text in progress.... Please wait...`,
    xgCADDRB: `What is the name of the multilingual string repository where we store the various page/subpage messages that will be requested from you soon?`,
    x0gbEzB1: `What is the name of the page to which this subpage is being added?`,
    xAR6qqzl: `What is the name of the multilingual string containing the appbar text?`,
    xdffYAaj: `Write the text to be displayed in the appbar, in French.`,
    xXJW3ibu: `Write the text to be displayed in the appbar, in English.`,
    xOzxVGdq: `Describe in detail what this function must do. The goal that this function must accomplish.
If this function must return a value, a component, null, 42, "Tizi Ouzou", etc..., 
and/or execute callbacks, an HTTP request, a thing or a whatever, and so on, etc..., 
That is where you describe all this.
REMINDER: The function consumes this:`,
    xVbAbBWr: `In what computer language do you want to create this function? Write down the name of the desired language.`,
    xRGSApZm: `Write a simple description of what this function does.
NOTE: Don't be too detailed, 1 or 2 sentences max, 
detailed description comes as the next step.
Here's what the function consumes:`,

    xh18KqCT: `Give a name, and a short description, for each argument to be consumed by the function.`,
    x59H8rgZ: `Do you want the code use example, to have a return line or not?`,
    x476CB9d: `Do you want the function import to have an absolute path (useful when you use the path aliasing), or relative (if you don't know what to choose, choose 'relative')?`,
    xXiQp9c: `What is the name of the multi-language string containing the message to be displayed if the page is empty?`,
    xWR7fhN: `Write the 'empty page' message, in French`,
    x0Jv35yF: `Write the 'empty page' message, in English`,
    x4BfDGln: `What is the name of the multilingual text containing the message of the page item creation button?`,
    xNmBnPB6: `Write the text of the item creation button for this page, in French.`,
    xYIe4QcG: `Write the text of the item creation button for this page, in English.`,
    xv3VSQSm: `Do you want to delete the body of the function having /* PLOP_INJECT_CODE */ in comment, in the following file: `,
    x7pVQxGu: `In which file do you want to use this item? Starting from the following folder: `,
    x5uWGLCn: `In which folder do you want to create this item, starting from the following directory?`,
    xIJLLYu8: `What do you want to do?`,
    xMEGdn96: `A little time-saving script to execute? This is where it happens.`,
    xpMyfHf: `Create an individual job (by default an HTTP request).`,
    xkE7uMjm: `Create a job list.`,
    xJjkcv: `Create a singleton.`,
    x47TFTW7: `Create a questionnaire.`,
    xExsVaBf: `Create a state using the useState() function.`,
    xOarFNkY: `Create a global state (with Redux).`,
    xxUmfKij: `Create a default template application (React Native).`,
    xbfJ42tQ: `Add an international string to the string directory.`,
    x6W6CXdo: `Create an international string directory.`,
    x1a2jf2d: `Create a React Native Function/Component.`,
    xGzPo0pj: `In a given programming language, create a function (with the help of Chat GPT, the magic A.I).`,
    xCaIs0jy: `Create a subpage.`,
    xDlFMoEz: `Create a page.`,
    xcyv29p: `Create a component.`,
    x7WH7DI9: `A question whose answer depends on your needs, with your custom U.I.`,
    xnzq5iR: `A question with multiple choice answer.`,
    xscsZacn: `A question whose answer is a number.`,
    xLZYMJCB: `A question whose answer is text.`,
    xq1LWW61: `This command does not exist.`,
    xKnOkicO: `Multilingual string generation in progress, my friend! Wait a few moments....`,

    xjbmERwe: `What is the name of this element?`,
    xuMM4l4: `Choose the file in which you want to add this multilingual string?`,
    xxjqZAJa: `Write the text in English.`,
    xA5VJgC: `Enter your text here.`,
    xAq0rQ80: `What is the name of this string?`,
    xGOWqsXp: `Write the APPROXIMATE path of the folder where you want to create this item. Starting from the following folder:`,
    xzY8qWWH: `Write the APPROXIMATE path of the folder containing the file in which you want to use this element. Starting from the following folder: .`,
    xcFMYkUC: `Write the APPROXIMATE path of the folder containing the file you wish to use this string in. 
The next step will provide you with a list of files located in the given approximation, this intermediary step is necessary for the list of choices not to be too long ;-). Starting from the following folder:`,
    xO1Q5Gfr: `What is the path of the folder containing the file with multilingual strings, starting from the following folder:`,
    xfMNdApA: `What is the name of the repository containing multilingual strings?`,
    xfzQYMCD: `What is the path of the folder containing the questionnaire ? Starting from the following folder:`,
    xNJrMs3d: `What is the file name (with extension) containing the list of questions?`,
    xS03Pei: `What is the boolean condition under which an answer is valid?
You can use currentItem, the very last item clicked on in a page data list, if it is a question that creates/updates page data.
If the question is of type "choices", an object <QuestionName>Choices is created, containing all the individual choices of the choices list created a little earlier.
You also have access to: input, answers, answer, answerIndex.`,
    xIw7ngfQ: `What kind of question do you want to create?`,
    xbPEjCEJ: `If displaying this question requires page data (SqliteRedux<PageName>), provide the name of the page.`,
    xhkNPhBk: `What is the name of this question?`,
    xO3KYhe7: `What is the default content of the TextInput?
You can use currentItem, the very last item clicked on in a page data list if it is a question that creates/updates page data. You also have access to: answers, answer, answerIndex.`,
    x5yXb69D: `What is the default answer to assign to the question ?
You can use: currentItem, the very last item clicked on.
If the question is of type "choices", an object <QuestionName>Choices is created, containing all the individual choices from the choice list created a bit earlier.`,
    xfNgw7Hy: `Enter the name of the choice. Or leave it blank and press Enter if you have added all the desired choices.`,
    xiJ3sBf9: `What is the name of the multilingual string for the error message of the question?`,
    xovQnXlQ: `Write the error message for the question (in French).`,
    xZlP7ykZ: `Write the error message for the question.`,
    xeX4c0nd: `What is the name of the multilingual string description of the question?`,
    xIuC3fIz: `Write the description of the question (in French).`,
    xS1a1vI9: `Write the description of the question (in English).`,
    xA61w42b: `Starting from the root folder of the application, give an approximation of the folder where the file containing the multilingual strings is located.`,
    x6hYuqBl: `Starting from the root folder of the application, give an approximation of the folder where the questionnaire is located.`,
    xNf13rOd: `If needed, provide the type of data stored in the row, if the row does not exist, and must be created. (There are three possible types: "TEXT" (string), "INTEGER" (integer number), and "REAL" (decimal number).)`,
    xMS0fGna: `If necessary, provide the name of the row to be added/modified in the DB.`,
    xmrR9CoG: `If necessary, provide the default value to give to the row (if it is a Page/Component State).`,
    xRPTbEV: `What do you want to do each time the content of the TextInput changes? (if needed)
You can use newText, the current content of the TextInput after changes.
You can use currentItem, the last clicked item. 
You can use SaveCurrentItem, the callback for saving the data of currentItem. This allows to save newText, for example: 
currentItem != null ? SaveCurrentItem({ ...currentItem, property: newText }) : 42;`,
    xcAcXir: `What is the path of the .js file where we save the response, via SqliteRedux<PageName>.AddRowToDatabase?`,
    xPFSRaqF: `What is the path of the .js file where we modify the response, via SqliteRedux<PageName>.UpdateSpecificRowsFromDB?`,
    xNJobvTO: `What is the path of the DatabaseInfo.js file where a row is to be created if needed?`,
    xQ9kkXlv: `There is no valid Maslow.json file in this folder.`,
    xMHKADJN: `A problem occurred during the re-generation of function... Try again!`,
    xsmBvxu: `An issue occurred during the re-generation of function... Try again!`,
    xfxhHQMw: `The function is currently being re-generated... Please wait a few moments...`,
    xGwWwYrK: `Failed to get the translated text.`,
    xPoV9wFK: `Chat GPT is translating a nice text... Please wait a few moments....`,
    x7MiVrtQ: `You must add a command after 'maslow'`,
    xBOoVhne: `N.B.: Chat GPT is an AI, so sometimes there may be errors.
Just regenerate the code until the result is satisfactory. DON'T PANIC, BREATHE :-).
I wish you all the best in achieving all your wildest dreams.`,
    xjBxze0p: `With the get_ai_service_xxx.txt files, modify the function, then run the command below to quickly regenerate the function:`,
    xGZ1dJ7M: `The cake is ready! Set up what is needed with this command:`,

    xkRatDXn: `Choose the path of the file containing the text to be translated, starting from this folder:`,
    xInKYUuv: `
Boss... Before we can get started, store your OpenAI API key, 
in an environment variable, named OPENAI_API_KEY.
Then re-try this command.`,
    xPrJY8wG: `A problem occurred during the mission.... Try again later ;-)`,
    xdRfRmMN: `
Thank you for using maslow. I believe in you, and in your ability to do great things in this life.
`,
    xqzeuOsM: `
You must give the path of the folder containing the fonction to be re-generated, like this:

maslow regen-ai-func <path/vers/dossier/fonction>
`,

    welcome: "Hello",
    country: "en",
  },
  fr: {
    /* PLOP_INJECT_FR_STRING */
    xtWQiwJ7: `Installation de toutes les choses nécessaires au fonctionnement de maslow... Veuillez patienter svp...`,
    xWtfTMu: `\nTraduction de texte en cours.... Veuillez patienter svp...\n`,
    xgCADDRB: `Quel est le nom du répositoire de strings multilingue dans lequel on stocke les divers messages de page/subpage qui te seront demandés sous peu ?`,
    x0gbEzB1: `Quel est le nom de la page dans laquelle on ajoute cette sous-page ?`,
    xAR6qqzl: `Quel est le nom du string multilingue contenant le texte de l'appbar ?`,
    xdffYAaj: `Ecris le texte à afficher dans l'appbar, en Français.`,
    xXJW3ibu: `Ecris le texte à afficher dans l'appbar, en Anglais.`,
    xOzxVGdq: `Décris en détail ce que cette fonction doit faire. Le but que cette fonction doit accomplir.
Si cette fonction doit retourner une valeur, un component, null, 42, "Tizi Ouzou", etc..., 
et/ou exécuter des callbacks, une requête HTTP, un truc ou un machin, et j'en passe, etc...,
C'est ici que tu décris tout ceci.
RAPPEL: La fonction consomme ceci:`,
    xVbAbBWr: `Dans quel language informatique veux tu créer cette fonction ? Ecris le nom du language souhaité.`,
    xRGSApZm: `Ecris une description simple, de ce que fait cette fonction.
NOTE: Ne soit pas trop détaillé, 1 ou 2 phrases maxi suffisent, 
la description détaillé vient à l'étape suivante.
Voici ce que consomme la fonction:`,
    xybSqykJ: `Décris SIMPLEMENT ce que fait, à quoi sert cette fonction.
NOTE: Ne soit pas trop détaillé, 1 ou 2 phrases maxi suffisent, 
la description détaillé vient à l'étape suivante.
RAPPEL: La fonction consomme ceci:`,

    xh18KqCT: `Donne un nom, et une description simple et courte, pour chaque argument que consomme cette fonction.`,
    x59H8rgZ: `Veux tu que le code utilisant la fonction, ait une ligne de retour, ou pas ?`,
    x476CB9d: `Veux tu que l'import de fonction, 
ait un path absolu (utile quand tu utilise le path aliasing), 
ou relatif (si tu sais pas quoi choisir, choisis 'relatif') ?`,
    xXiQp9c: `Quel est le nom du string multilingue contenant le message à afficher si la page est vide ?`,
    xWR7fhN: `Ecris le message à afficher quand la page est vide (en Français).`,
    x0Jv35yF: `Ecris le message de page vide, en Anglais`,
    x4BfDGln: `Quel est le nom du texte multilingue contenant le message du bouton de création d'article de page.`,
    xNmBnPB6: `Ecris le message du bouton de création d'article de page, en Français`,
    xYIe4QcG: `Ecris le message du bouton de création d'item de page, en Anglais`,
    xv3VSQSm: `Veux tu supprimer le body de la fonction ayant /* PLOP_INJECT_CODE */ en commentaire, dans le fichier suivant:`,
    x7pVQxGu: `Dans quel fichier veux tu utiliser cet élément ? Partant du dossier suivant:`,
    x5uWGLCn: `Dans quel dossier veux tu créer cet élément ? Partnt du dossier suivant:`,
    xIJLLYu8: `Que souhaites-tu faire ?`,
    xMEGdn96: `Un ptit script sauveur de temps à exécuter ? C ici ke sa se passe.`,
    xpMyfHf: `Crée un boulot individuel (par défaut une requête HTTP)`,
    xkE7uMjm: `Crée une liste de boulot vide`,
    xJjkcv: `Crée un singleton`,
    x47TFTW7: `Crée un questionnaire`,
    xExsVaBf: `Crée un state (avec useState)`,
    xOarFNkY: `Crée un state global (avec Redux)`,
    xxUmfKij: `Crée un template par défaut d'appli (React Native)`,
    xbfJ42tQ: `Ajoute un string international dans le répertoire.`,
    x6W6CXdo: `Crée un répertoire de strings internationaux.`,
    x1a2jf2d: `Crée une fonction React Native/un component React Native.`,
    xGzPo0pj: `Crée une fonction dans un language de programmation donné (via Chat GPT, l'I.A. magique)`,
    xCaIs0jy: `Crée une sous page`,
    xDlFMoEz: `Crée une page.`,
    xcyv29p: `Crée un component`,
    x7WH7DI9: `Une question dont la réponse est selon tes besoins, avec ton U.I. custom.`,
    xnzq5iR: `Une question dont la réponse est un choix`,
    xscsZacn: `Une question dont la réponse est un nombre`,
    xLZYMJCB: `Une question dont la réponse est du texte`,
    xq1LWW61: `Cette commande n'existe pas:`,
    xKnOkicO: `Génération de string multilingue en cours, mon ami ! Patientes quelques instants....`,
    xjbmERwe: `Quel est le nom de cet élément ?`,
    xuMM4l4: `Choisis le fichier dans lequel tu souhaites ajouter ce string multilingue ?`,
    xxjqZAJa: `Ecris le texte en Anglais:`,
    xA5VJgC: `Ecris le texte en Français:`,
    xAq0rQ80: `Quel est le nom de ce string ?`,
    xGOWqsXp: `Ecris le path APPROXIMATIF du dossier dans lequel tu souhaites créer cet élément. Partant du dossier suivant:`,
    xzY8qWWH: `Ecris le path APPROXIMATIF du dossier contenant le fichier dans lequel tu souhaites utiliser cet élément. Partant du dossier suivant:`,
    xcFMYkUC: `Ecris le path APPROXIMATIF du dossier contenant le fichier dans lequel tu souhaites utiliser ce string. Partant du dossier suivant:`,

    xO1Q5Gfr: `Quel est le path du dossier dans lequel se trouve le fichier contenant les strings multilingue, partant du dossier suivant:`,
    xfMNdApA: `Quel est le nom du repositoire contenant les strings multilingues ?`,
    xfzQYMCD: `Quel est le path du dossier contenant le questionnaire ? Partant du dossier suivant:`,
    xNJrMs3d: `Quel est le nom (avec extension) du fichier contenant la liste de questions ?`,
    xS03Pei: `Quelle est la condition booléene selon laquelle une réponse est valide ?
Tu peux te servir de currentItem, le tout dernier item cliqué dessus dans une liste de données de page, si c'est une question qui crée/update des données de page.
Si la question est de type "choices", un objet <QuestionName>Choices est crée, contenant tous les choix individuels de la liste de choix créee un peu plus tôt.
Tu as aussi accès à: input, answers, answer, answerIndex`,
    xIw7ngfQ: `Quel genre de question veux tu créer ?`,
    xbPEjCEJ: `Si l'affichage de cette question nécessite des donnÃ©es de page (SqliteRedux<PageName>) , donne le nom de la page.`,
    xhkNPhBk: `Quel est le nom de cette question ?`,
    xO3KYhe7: `Quel est le contenu par défaut du TextInput ?

Tu peux te servir de currentItem, le tout dernier item cliqué dessus dans une liste de données de page, si c'est une question qui crée/update des données de page.
Tu as aussi accès à: answers, answer, answerIndex`,
    x5yXb69D: `Quelle est la réponse par défaut à assigner à la question ?
Tu peux te servir de: currentItem, le tout dernier item cliqué dessus.
Si la question est de type "choices", un objet <QuestionName>Choices est crée, contenant tous les choix individuels de la liste de choix créee un peu plus tôt.`,
    xfNgw7Hy: `Donne le nom du choix. Ou laisse ici vide, et appuie sur Entrée si tu as ajouté tous les choix souhaités.`,
    xiJ3sBf9: `Quel est le nom du string multilingue du message d'erreur de la question ?`,
    xovQnXlQ: `Ecris le message d'erreur de la question (en FranÃ§ais)`,
    xZlP7ykZ: `Ecris le message d'erreur de la question (en Anglais)`,
    xeX4c0nd: `Quel est le nom du string multilingue de description de la question ?`,
    xIuC3fIz: `Ecris la description de la question (en Français)`,
    xS1a1vI9: `Ecris la description de la question (en Anglais)`,
    xA61w42b: `Partant du dossier racine de l'application, donne une approximation du dossier 
dans lequel se trouve le fichier contenant les strings multilingue.`,
    x6hYuqBl: `Partant du dossier racine de l'application, donne une approximation du dossier dans lequel se trouve le questionnaire.`,
    xNf13rOd: `Si besoin, fournit le type de données stockée dans le row, si le row n'existe pas, et doit être crée.
(il y a 3 types possibles: "TEXT" (string), "INTEGER" (nombre entier), et "REAL" (nombre decimal))`,
    xMS0fGna: `Si besoin, fournit le nom du row à ajouter/modifier, dans la DB.`,
    xmrR9CoG: `Si besoin, fournit la valeur par défaut à donner au row (si c'est un State de page/component)`,
    xRPTbEV: `Que veux-tu faire à chaque fois que le contenu du TextInput à changé ? (si besoin)
Tu peux te servir de newText, le contenu actuel du TextInput, après changements.
Tu peux te servir de currentItem, le tout dernier item cliqué dessus 
Tu peux te servir de SaveCurrentItem, la callback de sauvegarde des données de currentItem. Ceci permet entre autre de sauvegarder newText. Par ex.:
currentItem != null ? SaveCurrentItem({ ...currentItem, property: newText }) : 42;`,
    xcAcXir: `Quel est le path du fichier .js où on sauvegarde la réponse, via SqliteRedux<PageName>.AddRowToDatabase ?`,
    xPFSRaqF: `Quel est le path du fichier .js où on modifie la réponse, via SqliteRedux<PageName>.UpdateSpecificRowsFromDB ?`,
    xNJobvTO: `Si besoin, quel est le path du fichier DatabaseInfo.js dans lequel créer un row ?`,
    xQ9kkXlv: `Il n'existe pas de fichier Maslow.json valide dans ce dossier:`,
    xMHKADJN: `Un problème est survenu durant la ré-génération de fonction.... Essaie à nouveau :-) !`,
    xsmBvxu: `Un problème est survenu durant la ré-génération de fonction.... Essaie à nouveau :-) !`,
    xfxhHQMw: `La fonction est en cours de rÃ©-gÃ©nÃ©ration... Patientes quelques instants...`,
    xGwWwYrK: `Failed to get the translated text.`,
    xPoV9wFK: `Chat GPT est en train de traduire un joli texte...
Veuillez patienter quelques instants....`,
    x7MiVrtQ: `Il faut ajouter une commande après 'maslow'`,
    xBOoVhne: `N.B.: Chat GPT est une IA, donc parfois il y a des erreurs.
Il suffit de re-générer le code jusqu'a ce que le résultat soit satisfaisant. DON'T PANIC, RESPIRE :-) .
Je te souhaite d'accomplir tous tes rêves les plus fous.`,
    xjBxze0p: `Avec les fichiers prompts/get_ai_service_xxx.txt, modifie la fonction,
puis exécute la commande ci-dessous, pour re-gÃ©nÃ©rer la fonction rapidement:`,
    xGZ1dJ7M: `Le gâteau est prêt ! Installe ce qu'il faut, avec cette commande:`,

    xkRatDXn: `Choisis le path du fichier contenant le texte à traduire, partant de ce dossier:`,
    xInKYUuv: `
Boss... Avant de commencer la fête, stocke une clé API OpenAI, 
dans une variable d'environnement, nommée OPENAI_API_KEY.
Ensuite ré-essaie cette commande.`,
    xPrJY8wG: `Un problème est survenu durant la mission.... Réessaie, amigo ;-)`,
    xdRfRmMN: `
Merci d'avoir utilisé maslow. Je crois en toi, et en ta capacité à créer de grandes choses dans cette vie...
`,
    xqzeuOsM: `
Il faut fournir le path du dossier contenant la fonction à re-générer, comme ceci:

maslow regen-ai-func <path/vers/dossier/fonction>
`,

    welcome: "Bonjour",
    country: "fr",
  },
};

/**
 * la fonction d'init de répertoire de strings
 */
const AppStrings = () => {
  //  console.log("Cette function d'init de répertoire doit run 1 seule fois");

  let locale = Intl.DateTimeFormat().resolvedOptions().locale;

  // Set the locale once
  // at the beginning of your app.
  i18n.locale = locale;

  // When a value is missing from a language,
  // it'll fallback to another language with the key present.
  i18n.fallbacks = true;

  //console.log(`text: ${i18n.t("welcome")}`);
};

export { AppStrings };
