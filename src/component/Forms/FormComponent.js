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
    location: "",
  };

  updateState = (name, value) => {
    console.debug(`value for ${name} is ${value}`);
    this.setState({ [name]: value });
  };

  submitForm = () => {
    console.log(`in form submit function`);
    const fieldsArray = formConfig.inputFields;
    validateFormFields(fieldsArray, this.state);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
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
