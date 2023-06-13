export function FormatObjectToJSON(jsonString) {
  // enleve les blancs de début en fin de string
  jsonString = jsonString.trim();

  // escape les single quotes
  jsonString = jsonString.replace(/'/g, "\\'");

  // Add double quotes to property values
  jsonString = jsonString.replace(/(\b[a-zA-Z0-9_]+\b)(\s*):/g, '"$1":');

  // Replace '<some text>', "<some text>", `<some text>`, or ``some text`` with "<some text>"
  jsonString = jsonString.replace(
    /(`|<|'|")(.*?)(`|>|'|")/g,
    function (match, p1, p2, p3) {
      if ((p1 === "`" && p3 === "`") || (p1 === "'" && p3 === "'")) {
        // If the match starts and ends with backticks, replace the outer backticks with double quotes
        return '"' + p2 + '"';
      }
      // Preserve the match as it is
      return match;
    }
  );

  var result = eval("(" + jsonString + ")");

  return result;
}
