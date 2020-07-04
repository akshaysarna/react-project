import React from "react";
import FormComponent from "../Forms/FormComponent";
import { validateFormFields } from "../../formValidator/validator";
import formConfiguration from "../../form-config.json";
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  updateState = (name, value) => {
    this.setState({ [name]: value });
  };

  submitForm = () => {
    const fieldsArray = formConfiguration.loginForm;
    validateFormFields(fieldsArray, this.state);
  };
  render() {
    const loginFormConfig = formConfiguration.loginForm;
    return (
      <FormComponent
        formConfig={loginFormConfig}
        formState={this.state}
        updateState={this.updateState}
        submitForm={this.submitForm}
      />
    );
  }
}

export default LoginForm;
