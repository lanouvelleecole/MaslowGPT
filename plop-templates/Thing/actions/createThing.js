import {
  getProperFolderName,
  getProperExtension,
  userChoices,
} from "../prompts/askWhatUserWants.js";
import { createActionTemporaire } from "./createActionTemporaire.js";
import { createComponent } from "./createComponent.js";
import { createDoWork } from "./createDoWork.js";
import { createHTDPTemplate } from "./createHTDPTemplate.js";
import { createPage } from "./createPage.js";
import { createPageItemsReduxState } from "./createPageItemsReduxState.js";
import { createPageStateReduxState } from "./createPageStateReduxState.js";
import { createSubpage } from "./createSubpage.js";
import { createQuestionnaire } from "./createQuestionnaire.js";
import { createReduxState } from "./createReduxState.js";
import { createService } from "./createService.js";
import { createSingleton } from "./createSingleton.js";
import { createStringRepo } from "./createStringRepo.js";
import { createWorkHTTP } from "./createWorkHTTP.js";
import { createAIService } from "./createAIService.js";

function createThing(
  subfolder,
  actualJsFile,
  whatThing,
  thingName,
  appRootPath,
  promptData,
  plop
) {
  const properFolderName = getProperFolderName(whatThing);
  const properExtension = getProperExtension(whatThing);

  if (whatThing === userChoices.createReduxState) {
    return createReduxState({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing === userChoices.createHTDPTemplate) {
    return createHTDPTemplate({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing === userChoices.createSingleton) {
    return createSingleton({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing === userChoices.createDoWork) {
    return createDoWork({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing === userChoices.createWorkHTTP) {
    return createWorkHTTP({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  }
  // AJOUTE_TEMPLATE //
  else if (whatThing == userChoices.createSubpage) {
    return createSubpage({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
      pageAndSubpageData: promptData,
    });
  } else if (whatThing == userChoices.createQuestionnaire) {
    return createQuestionnaire(subfolder, actualJsFile);
  } else if (whatThing == userChoices.createPage) {
    //  ["AppStrings", ["TestPageTitle", "Le titre", "Ze titeul"], ["EmptyTestPageMsg", "Il y a rien dans cette base de données... Remplis moi cette base vide", "This database is empty... Fill this up plz"], ["EmptyTestPageBtnMsg", "Remplis moi", "Fill me"]]

    const page = createPage({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
      pageAndSubpageData: promptData,
    });

    const pageItems = createPageItemsReduxState({
      subfolder: "src/reduxState",
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });

    const pageState = createPageStateReduxState({
      subfolder: "src/reduxState",
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });

    return [...page, ...pageItems, ...pageState];
  } else if (whatThing == userChoices.createComponent) {
    return createComponent({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing == userChoices.createService) {
    return createService({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });
  } else if (whatThing == userChoices.createAIService) {
    return createAIService({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
      promptData,
      plop,
    });
  } else if (whatThing == userChoices.createStringRepo) {
    return createStringRepo(
      subfolder,
      properExtension,
      properFolderName,
      actualJsFile
    );
  } else if (whatThing == userChoices.actionTemporaire) {
    createActionTemporaire({
      subfolder: subfolder,
      name: thingName,
      actualJsFile: actualJsFile,
      appRootPathFromC: appRootPath,
    });

    return [];
  } else {
    return [];
  }
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

export { createThing };
export { toPascalCase };
export { clearAndUpper };
