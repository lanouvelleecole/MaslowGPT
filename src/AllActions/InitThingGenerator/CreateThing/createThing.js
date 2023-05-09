import {
  getProperFolderName,
  getProperExtension,
  userChoices,
} from "../../../AllPrompts/GetGeneratePrompts/askWhatUserWants.js";
import { createActionTemporaire } from "./CreateActionTemporaire/createActionTemporaire.js";
import { createComponent } from "./CreateComponent/createComponent.js";
import { createDoWork } from "./CreateDoWork/createDoWork.js";
import { createHTDPTemplate } from "./CreateHTDPTemplate/createHTDPTemplate.js";
import { createPage } from "./CreatePage/createPage.js";
import { createPageItemsReduxState } from "./CreatePageItemReduxState/createPageItemsReduxState.js";
import { createPageStateReduxState } from "./CreatePageStateReduxState/createPageStateReduxState.js";
import { createSubpage } from "./CreateSubpage/createSubpage.js";
import { createQuestionnaire } from "./CreateQuestionnaire/createQuestionnaire.js";
import { createReduxState } from "./CreateReduxState/createReduxState.js";
import { createService } from "./CreateService/createService.js";
import { createSingleton } from "./CreateSingleton/createSingleton.js";
import { createStringRepo } from "./CreateStringRepo/createStringRepo.js";
import { createWorkHTTP } from "./CreateWorkHTTP/createWorkHTTP.js";
import { createAIService } from "./CreateAIService/createAIService.js";

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

export { createThing };
