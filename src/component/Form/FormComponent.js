import React from "react";
import InputFieldComponent from "./InputField/InputFieldComponent";
import formConfig from "../../form-config.json";

class FormComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  };

  updateState = (name, value) => {
    console.log(`value for ${name} is ${value}`);
    this.setState({ [name]: value });
  };

  getFormFields = () => {
    const fieldsArray = formConfig.inputFields;
    return fieldsArray.map((field) => {
      return (
        <InputFieldComponent
          key={field.name}
          fieldDetails={field}
          updateState={this.updateState}
        />
      );
    });
  };

  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">User Information</h4>
        {this.getFormFields()}
      </form>
    );
  }
}

export default FormComponent;
