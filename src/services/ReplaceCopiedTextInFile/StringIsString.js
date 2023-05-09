export function StringIsString(patternStr) {
  const firstCharacter = patternStr[0];
  const patternStrStartsWQuote = ["'", '"', "`"].includes(firstCharacter);
  const lastCharacter = patternStr[patternStr.length - 1];
  const patternStrEndsWQuote = ["'", '"', "`"].includes(lastCharacter);
  const startAndEndQuoteAreTheSame = firstCharacter === lastCharacter;
  const patternStrIsAString =
    patternStrStartsWQuote &&
    patternStrEndsWQuote &&
    startAndEndQuoteAreTheSame;

  if (patternStrIsAString) {
    return true;
  } else {
    return false;
  }
}
