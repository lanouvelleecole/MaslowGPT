import { CurrencyChoices } from "../CurrencyChoices/CurrencyChoices";
import { CurrencyLayout } from "./CurrencyLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllCurrency({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(CurrencyChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return CurrencyLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
