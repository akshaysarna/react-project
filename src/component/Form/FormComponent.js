import React from "react";
import FieldsComponent from "./Fields/FieldsComponent";
import { validateFormFields } from "../../formValidator/validator";
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

  submitForm = () => {
    console.log("in form submit function");
    const fieldsArray = formConfig.inputFields;
    validateFormFields(fieldsArray, this.state);
  };

  render() {
    return (
      <div className="ui container">
        <form className="ui form">
          <h4 className="ui dividing header">User Information</h4>
          <FieldsComponent
            updateState={this.updateState}
            submitForm={this.submitForm}
          />
        </form>
      </div>
    );
  }
}

export default FormComponent;
