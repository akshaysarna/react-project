import React from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "../Fields/ButtonComponent";
import SelectComponent from "../Fields/SelectComponent";

class FieldsComponent extends React.Component {
  getFormFields = () => {
    const fieldsArray = this.props.formConfig;
    return fieldsArray.map((field) => {
      if (field.type === "button") {
        return (
          <ButtonComponent
            key={field.name}
            fieldDetails={field}
            submitForm={this.props.submitForm}
          />
        );
      } else if (field.type === "select") {
        return (
          <SelectComponent
            key={field.name}
            fieldDetails={field}
            updateState={this.props.updateState}
          />
        );
      } else {
        return (
          <InputComponent
            key={field.name}
            fieldDetails={field}
            formState={this.props.formState}
            updateState={this.props.updateState}
          />
        );
      }
    });
  };

  render() {
    return this.getFormFields();
  }
}
export default FieldsComponent;
