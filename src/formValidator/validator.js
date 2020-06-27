import { validateInputField } from "./validateInputFeild";
const validateInput = (fieldType, value, lengthCheckRequired) => {
  let isRegexValid = validateInputField(fieldType, value);
  console.log("is Regex validd -> " + isRegexValid);

  if (value && isRegexValid) {
    return true;
  }
  return false;
};

export { validateInput };
