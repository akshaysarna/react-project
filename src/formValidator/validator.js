import { validateInputField } from "./validateInputFeild";
import { showAndHideError } from "../formValidator/error";

const validateInput = (fieldType, value) => {
  let isRegexValid = validateInputField(fieldType, value);
  console.log("is Regex validd -> " + isRegexValid);

  if (value && isRegexValid) {
    return true;
  }
  return false;
};

const validateFormFields = (fields, state) => {
  let isFormValid = true;
  const areFieldsValid = [];
  fields.map((field) => {
    if (field.type !== "button") {
      const isFieldValid = validateInput(field.fieldType, state[field.name]);
      areFieldsValid.push(isFieldValid);
      const element = document.getElementById(field.name);
      showAndHideError(element, isFieldValid);
      return isFieldValid;
    }
    return true;
  });
  const inValidFieldValues = areFieldsValid.filter((fieldValid) => !fieldValid);
  if (inValidFieldValues.length > 0) {
    isFormValid = false;
  }
  return isFormValid;
};

export { validateInput, validateFormFields };
