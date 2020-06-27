import { validateInputField } from "./validateInputFeild";
import {
  showAndHideInputError,
  showAndHideSelectError,
} from "../formValidator/error";

const validateInput = (fieldType, value) => {
  let isRegexValid = validateInputField(fieldType, value);
  console.debug("is Regex validd -> " + isRegexValid);

  if (value && isRegexValid) {
    return true;
  }
  return false;
};

const validateSelect = (value) => {
  if (value) return true;
  else return false;
};

const validateFormFields = (fields, state) => {
  let isFormValid = true;
  const areFieldsValid = [];

  fields.map((field) => {
    const element = document.getElementById(field.name);
    if (field.type === "select") {
      const isFieldValid = validateSelect(state[field.name]);
      areFieldsValid.push(isFieldValid);
      showAndHideSelectError(element, isFieldValid);
    } else if (field.type !== "button") {
      const isFieldValid = validateInput(field.fieldType, state[field.name]);
      areFieldsValid.push(isFieldValid);

      showAndHideInputError(element, isFieldValid);
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

export { validateInput, validateSelect, validateFormFields };
