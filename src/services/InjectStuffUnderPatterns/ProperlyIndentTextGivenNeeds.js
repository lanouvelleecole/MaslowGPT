import { Constants } from "../../AppConstants/Constants.js";
import {
  ProperlyIndentFirstLine,
  ProperlyIndentString,
} from "../ProperlyIndentString/ProperlyIndentString.js";

export function ProperlyIndentTextGivenNeeds(
  indent,
  stuffUnderPattern,
  howManySpacesB4Pat
) {
  if (indent == Constants.only_first) {
    return ProperlyIndentFirstLine(
      `\n${stuffUnderPattern}`,
      howManySpacesB4Pat
    ).trimEnd();
  } else if (indent == true) {
    return ProperlyIndentString(
      `\n${stuffUnderPattern}`,
      howManySpacesB4Pat
    ).trimEnd();
  } else {
    return `\n${stuffUnderPattern}`;
  }
}
