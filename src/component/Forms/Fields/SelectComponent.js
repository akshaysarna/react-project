import React from "react";
import { validateSelect } from "../../../formValidator/validator";
import { showAndHideSelectError } from "../../../formValidator/error";

class SelectComponent extends React.Component {
  onSelectChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    const isValueValid = validateSelect(value);
    const element = document.getElementById(name);
    showAndHideSelectError(element, isValueValid);
  };
  selectField = () => {
    const selectFieldDetails = this.props.fieldDetails;
    return (
      <div className="field">
        <label>{selectFieldDetails.label}</label>
        <select
          className="ui fluid search dropdown"
          id={selectFieldDetails.name}
          name={selectFieldDetails.name}
          value={selectFieldDetails.value}
          onChange={this.onSelectChange}
        >
          {selectFieldDetails.options.map((option) => {
            return <option value={option.value}>{option.value}</option>;
          })}
        </select>
      </div>
    );
  };
  render() {
    return this.selectField();
  }
}

export default SelectComponent;
