function createQuestionnaire(subfolder, actualJsFile) {
  return [
    {
      type: "add",

      path: `${process.cwd()}/${subfolder}/{{pascalCase name}}/QuestionList.js`,
      templateFile: `plop-templates/hbs-files/QuestionList.js.hbs`,
    },
    // ajoute de quoi utiliser le questionnaire
    // (import)
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      template: `

import {{pascalCase name}} from '${subfolder}/{{pascalCase name}}/QuestionList';
import i18n from "i18n-js";
import { Constants } from "src/constants/Constants.js";
import { useNavigation, useRoute } from "@react-navigation/native";

`,
      when: (data) => {
        return actualJsFile != null;
      },
    },
    // ajoute de quoi utiliser le questionnaire
    // (import de GetUserInput)
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      pattern: `/* PLOP_INJECT_IMPORT */`,
      when: (data) => {
        return actualJsFile != null;
      },
      template: `import {
  GetUserInput
} from "src/components/GetUserInput/GetUserInput";
import {PlayerGTAInstance} from 'src/constants/PlayerGTA/PlayerGTA.js';`,
    },
    // ajoute de quoi utiliser le questionnaire
    // (component commenté)
    {
      type: "append",
      path: `${process.cwd()}/${actualJsFile}`,
      when: (data) => {
        return actualJsFile != null;
      },
      pattern: `/* PLOP_INJECT_CODE */`,
      template: `\t
  /*

  const route = useRoute();
  const navigation = useNavigation();
  const questions = {{pascalCase name}}({});

  <GetUserInput
    scrollDirection={"horizontal_one_by_one"}
    showAppbar={true}
    appbarTitle={i18n.t("Options")}
    clickSound={PlayerGTAInstance.GetSound()}
    appbarBackgroundColor={Constants.defaultBackgroundColor}
    appbarContentColor={Constants.defaultContentColor}
    appbarFont={Constants.defaultFontFamily}
    questions={questions}
    bodyBackgroundColor={Constants.defaultBackgroundColor}
    bodyContentColor={Constants.defaultContentColor}
    bodyFont={Constants.defaultFontFamily}
    bottomBarBackgroundColor={Constants.defaultBackgroundColor}
    bottomBarIconsColor={Constants.defaultContentColor}
    onCancel={() => {
      navigation.goBack();
    }}
    onSuccess={(answers) => {}}
    onError={({ errMsg, errAnswerIndex, answers }) => {
      navigation.goBack();
    }}
  ></GetUserInput>
  
\t*/`,
    },
  ];
}
export { createQuestionnaire };
