import { emailRegex, numberRegex, alphaNumericRegex } from "./regex";

const validateInputField = (fieldType, value) => {
  let isRegexValid = false;
  switch (fieldType) {
    case "email":
      isRegexValid = emailRegex.test(value);
      break;
    case "number":
      isRegexValid = numberRegex.test(value);
      break;
    case "alphanumeric":
      isRegexValid = alphaNumericRegex.test(value);
      break;

    default:
      break;
  }
  console.log(fieldType + "is Regex valid for input Field " + isRegexValid);
  return isRegexValid;
};

export { validateInputField };
