import React from "react";
import { validateInput } from "../../../formValidator/validator";
import { showAndHideError } from "../../../formValidator/error";

class InputFieldComponent extends React.Component {
  onChangeValidator = (e) => {
    console.log(this.props);
    const fieldType = e.target.getAttribute("fieldtype");

    console.log("fieldType -> " + fieldType);
    const name = e.target.id;
    const value = e.target.value;

    const element = document.getElementById(name);
    const isValueValid = validateInput(fieldType, value);
    if (isValueValid || value.length === 0) this.props.updateState(name, value);
    showAndHideError(element, isValueValid);
  };

  inputField = (props) => {
    if (props) {
      console.log(`props recived from parent ${JSON.stringify(props)}`);
    }

    return (
      <div className="field">
        <label>{props.label}</label>

        <div className="ui input">
          <input
            id={props.name}
            fieldtype={props.fieldType}
            type={props.type}
            value={props.value}
            onChange={this.onChangeValidator}
            placeholder={props.label}
          />
          <span></span>
        </div>
      </div>
    );
  };

  render() {
    return this.inputField(this.props.fieldDetails);
  }
}

export default InputFieldComponent;
