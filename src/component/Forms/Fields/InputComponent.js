import React from "react";
import { validateInput } from "../../../formValidator/validator";
import { showAndHideInputError } from "../../../formValidator/error";

class InputComponent extends React.Component {
  onChangeValidator = (e) => {
    console.debug(this.props);
    const fieldType = e.target.getAttribute("fieldtype");

    console.debug("fieldType -> " + fieldType);
    const name = e.target.id;
    const value = e.target.value;

    const element = document.getElementById(name);
    const isValueValid = validateInput(fieldType, value);
    if (isValueValid || value.length === 0) this.props.updateState(name, value);
    showAndHideInputError(element, isValueValid);
  };

  inputField = (props) => {
    const inputfieldDetails = props.fieldDetails;
    const fieldValue = props.formState[inputfieldDetails.name];
    return (
      <div className="field">
        <label>{inputfieldDetails.label}</label>

        <div className="ui input">
          <input
            id={inputfieldDetails.name}
            fieldtype={inputfieldDetails.fieldType}
            type={inputfieldDetails.type}
            value={fieldValue}
            onChange={this.onChangeValidator}
            placeholder={inputfieldDetails.label}
          />
          <span></span>
        </div>
      </div>
    );
  };

  render() {
    return this.inputField(this.props);
  }
}

export default InputComponent;
